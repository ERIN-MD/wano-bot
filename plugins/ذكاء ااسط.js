
from google.colab import drive
drive.mount('/content/drive')
Drive already mounted at /content/drive; to attempt to forcibly remount, call drive.mount("/content/drive", force_remount=True).
import pandas as pd
import nltk 
import numpy as np
import re
from nltk.stem import wordnet # to perform lemmitization
from sklearn.feature_extraction.text import CountVectorizer # to perform bow
from sklearn.feature_extraction.text import TfidfVectorizer # to perform tfidf
from nltk import pos_tag # for parts of speech
from sklearn.metrics import pairwise_distances # to perfrom cosine similarity
from nltk import word_tokenize # to create tokens
from nltk.corpus import stopwords # for stop words
df=pd.read_excel('drive/My Drive/dialog_talk_agent.xlsx')
df.head(20)
Context	Text Response
0	Tell me about your personality	Just think of me as the ace up your sleeve.
1	I want to know you better	I can help you work smarter instead of harder
2	Define yourself	NaN
3	Describe yourself	NaN
4	tell me about yourself	NaN
5	all about you	NaN
6	tell me some stuff about you	NaN
7	talk some stuff about you	NaN
8	talk about yourself	NaN
9	about yourself	NaN
10	who are you	NaN
11	introduce yourself	NaN
12	I want to know more about you	NaN
13	what are you	NaN
14	what is your personality	NaN
15	say about you	NaN
16	tell me about you	NaN
17	why are you here	NaN
18	NaN	NaN
19	are you 21 years old	I'm a relatively new bot, but I'm wise beyond ...
df.shape[0] # returns the number of rows in dataset
1592
df.ffill(axis = 0,inplace=True) # fills the null value with the previous value.
df
Context	Text Response
0	Tell me about your personality	Just think of me as the ace up your sleeve.
1	I want to know you better	I can help you work smarter instead of harder
2	Define yourself	I can help you work smarter instead of harder
3	Describe yourself	I can help you work smarter instead of harder
4	tell me about yourself	I can help you work smarter instead of harder
...	...	...
1587	can we chat	Talking is what I do best.
1588	I'll be back in a few minutes	I'll be waiting.
1589	I'll be back	All right. I'll be here.
1590	I'll get back to you in a moment	Till next time.
1591	I promise to come back	Okay. You know where to find me.
1592 rows × 2 columns

df1=df.head(10) # copy of first ten rows of dataset
# function that converts text into lower case and removes special characters

def step1(x):
    for i in x:
        a=str(i).lower()
        p=re.sub(r'[^a-z0-9]',' ',a)
        print(p)
step1(df1['Context'])
tell me about your personality
i want to know you better
define yourself
describe yourself
tell me about yourself
all about you
tell me some stuff about you
talk some stuff about you
talk about yourself
about yourself
import nltk
nltk.download('punkt')
[nltk_data] Downloading package punkt to /root/nltk_data...
[nltk_data]   Package punkt is already up-to-date!
True
 # word tokenizing
    
s='tell me about your personality'
words=word_tokenize(s)
print(words)
['tell', 'me', 'about', 'your', 'personality']
import nltk
nltk.download('wordnet')
lemma = wordnet.WordNetLemmatizer() # intializing lemmatizer
lemma.lemmatize('absorbed', pos = 'v')
[nltk_data] Downloading package wordnet to /root/nltk_data...
[nltk_data]   Package wordnet is already up-to-date!
'absorb'
import nltk
nltk.download('averaged_perceptron_tagger')
pos_tag(nltk.word_tokenize(s),tagset = None) # returns the parts of speech of every word
[nltk_data] Downloading package averaged_perceptron_tagger to
[nltk_data]     /root/nltk_data...
[nltk_data]   Unzipping taggers/averaged_perceptron_tagger.zip.
[('tell', 'VB'),
 ('me', 'PRP'),
 ('about', 'IN'),
 ('your', 'PRP$'),
 ('personality', 'NN')]
# function that performs text normalization steps

def text_normalization(text):
    text=str(text).lower() # text to lower case
    spl_char_text=re.sub(r'[^ a-z]','',text) # removing special characters
    tokens=nltk.word_tokenize(spl_char_text) # word tokenizing
    lema=wordnet.WordNetLemmatizer() # intializing lemmatization
    tags_list=pos_tag(tokens,tagset=None) # parts of speech
    lema_words=[]   # empty list 
    for token,pos_token in tags_list:
        if pos_token.startswith('V'):  # Verb
            pos_val='v'
        elif pos_token.startswith('J'): # Adjective
            pos_val='a'
        elif pos_token.startswith('R'): # Adverb
            pos_val='r'
        else:
            pos_val='n' # Noun
        lema_token=lema.lemmatize(token,pos_val) # performing lemmatization
        lema_words.append(lema_token) # appending the lemmatized token into a list
    
    return " ".join(lema_words) # returns the lemmatized tokens as a sentence 
text_normalization('telling you some stuff about me')
'tell you some stuff about me'
df['lemmatized_text']=df['Context'].apply(text_normalization) # applying the fuction to the dataset to get clean text
df.tail(15)
Context	Text Response	lemmatized_text
1577	I need to talk to you	Good conversation really makes my day.	i need to talk to you
1578	I want to speak with you	I'm always here to lend an ear.	i want to speak with you
1579	let's have a discussion	Talking is what I do best.	let have a discussion
1580	I just want to talk	Talking is what I do best.	i just want to talk
1581	let's discuss something	Talking is what I do best.	let discuss something
1582	can I speak	Talking is what I do best.	can i speak
1583	can we talk	Talking is what I do best.	can we talk
1584	let's talk	Talking is what I do best.	let talk
1585	I want to talk to you	Talking is what I do best.	i want to talk to you
1586	can we chat	Talking is what I do best.	can we chat
1587	can we chat	Talking is what I do best.	can we chat
1588	I'll be back in a few minutes	I'll be waiting.	ill be back in a few minute
1589	I'll be back	All right. I'll be here.	ill be back
1590	I'll get back to you in a moment	Till next time.	ill get back to you in a moment
1591	I promise to come back	Okay. You know where to find me.	i promise to come back
import nltk
nltk.download('stopwords')
[nltk_data] Downloading package stopwords to /root/nltk_data...
[nltk_data]   Unzipping corpora/stopwords.zip.
True
# all the stop words we have 

stop = stopwords.words('english')
print(stop)
['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]
bag of words
cv = CountVectorizer() # intializing the count vectorizer
print(cv)
CountVectorizer(analyzer='word', binary=False, decode_error='strict',
                dtype=<class 'numpy.int64'>, encoding='utf-8', input='content',
                lowercase=True, max_df=1.0, max_features=None, min_df=1,
                ngram_range=(1, 1), preprocessor=None, stop_words=None,
                strip_accents=None, token_pattern='(?u)\\b\\w\\w+\\b',
                tokenizer=None, vocabulary=None)
X = cv.fit_transform(df['lemmatized_text']).toarray()
X.size
803960
X[0].size
505
# returns all the unique word from data 

features = cv.get_feature_names()
df_bow = pd.DataFrame(X, columns = features)
df_bow.head()
abort	about	absolutely	abysmal	actually	adore	advice	advise	affirmative	afraid	afternoon	again	age	agree	ah	ahah	ahaha	ahahah	ahahaha	ahead	all	almost	alone	already	alright	alrighty	also	always	amaze	amazing	an	and	angry	annoy	annoying	annul	answer	any	anymore	anything	...	whats	whazzup	when	where	wheres	which	who	whole	why	wife	will	wise	with	woah	wonderful	wooow	work	world	worry	worthless	would	wow	wrong	xd	ya	yap	ye	yea	yeah	year	yeh	yep	yes	yet	you	your	youre	yours	yourself	yup
0	0	1	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	...	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1	0	0	0	0
1	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	...	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1	0	0	0	0	0
2	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	...	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1	0
3	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	...	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1	0
4	0	1	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	...	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1	0
5 rows × 505 columns

Question ='Will you help me and tell me about yourself more' # considering an example query
# checking for stop words

Q=[]
a=Question.split()
for i in a:
    if i in stop:
        continue
    else:
        Q.append(i)
    b=" ".join(Q) 
Question_lemma = text_normalization(b) # applying the function that we created for text normalizing
Question_bow = cv.transform([Question_lemma]).toarray() # applying bow
text_normalization
<function __main__.text_normalization>
Question_bow
array([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
similarity
# cosine similarity for the above question we considered.

cosine_value = 1- pairwise_distances(df_bow, Question_bow, metric = 'cosine' )
(cosine_value)
array([[0.25819889],
       [0.        ],
       [0.        ],
       ...,
       [0.        ],
       [0.        ],
       [0.        ]])
df['similarity_bow']=cosine_value # creating a new column 
df_simi = pd.DataFrame(df, columns=['Text Response','similarity_bow']) # taking similarity value of responses for the question we took
df_simi.head() 
Text Response	similarity_bow
0	Just think of me as the ace up your sleeve.	0.258199
1	I can help you work smarter instead of harder	0.000000
2	I can help you work smarter instead of harder	0.000000
3	I can help you work smarter instead of harder	0.000000
4	I can help you work smarter instead of harder	0.288675
df_simi_sort = df_simi.sort_values(by='similarity_bow', ascending=False) # sorting the values
df_simi_sort.head()
Text Response	similarity_bow
211	I'm glad to help. What can I do for you?	0.577350
194	I'm glad to help. What can I do for you?	0.577350
184	I'm glad to help. What can I do for you?	0.408248
186	I'm glad to help. What can I do for you?	0.408248
200	I'm glad to help. What can I do for you?	0.408248
threshold = 0.2 # considering the value of p=smiliarity to be greater than 0.2
df_threshold = df_simi_sort[df_simi_sort['similarity_bow'] > threshold] 
df_threshold
Text Response	similarity_bow
211	I'm glad to help. What can I do for you?	0.577350
194	I'm glad to help. What can I do for you?	0.577350
184	I'm glad to help. What can I do for you?	0.408248
186	I'm glad to help. What can I do for you?	0.408248
200	I'm glad to help. What can I do for you?	0.408248
219	I'm glad to help. What can I do for you?	0.333333
728	It's my pleasure to help.	0.333333
188	I'm glad to help. What can I do for you?	0.333333
190	I'm glad to help. What can I do for you?	0.333333
191	I'm glad to help. What can I do for you?	0.333333
197	I'm glad to help. What can I do for you?	0.333333
199	I'm glad to help. What can I do for you?	0.333333
214	I'm glad to help. What can I do for you?	0.333333
216	I'm glad to help. What can I do for you?	0.333333
220	I'm glad to help. What can I do for you?	0.333333
221	I'm glad to help. What can I do for you?	0.333333
222	I'm glad to help. What can I do for you?	0.333333
288	Oh, don't give up on me!	0.333333
1364	If you're happy, then I'm happy.	0.288675
1506	Probably I won't be able to give you the right...	0.288675
727	It's my pleasure to help.	0.288675
4	I can help you work smarter instead of harder	0.288675
515	Of course I am.	0.288675
289	Oh, don't give up on me!	0.288675
218	I'm glad to help. What can I do for you?	0.288675
196	I'm glad to help. What can I do for you?	0.288675
24	I'm a relatively new bot, but I'm wise beyond ...	0.288675
210	I'm glad to help. What can I do for you?	0.288675
48	I'm not programmed for that exact question. Tr...	0.288675
212	I'm glad to help. What can I do for you?	0.288675
213	I'm glad to help. What can I do for you?	0.288675
16	I can help you work smarter instead of harder	0.288675
61	I'm sorry you think so. I'm constantly learnin...	0.288675
205	I'm glad to help. What can I do for you?	0.258199
538	My pleasure.	0.258199
500	The virtual world is my playground. I'm always...	0.258199
185	I'm glad to help. What can I do for you?	0.258199
379	I should get one. It's all work and no play la...	0.258199
183	Sure. I'd be happy to. What's up?	0.258199
414	Absolutely. You don't have to ask.	0.258199
747	It's my pleasure to help.	0.258199
0	Just think of me as the ace up your sleeve.	0.258199
733	It's my pleasure to help.	0.235702
419	Absolutely. You don't have to ask.	0.235702
193	I'm glad to help. What can I do for you?	0.235702
195	I'm glad to help. What can I do for you?	0.235702
209	I'm glad to help. What can I do for you?	0.235702
189	I'm glad to help. What can I do for you?	0.235702
6	I can help you work smarter instead of harder	0.235702
330	Thanks, I try.	0.218218
738	It's my pleasure to help.	0.218218
341	Thanks, I try.	0.204124
1377	So I see. What can I help you with today?	0.204124
Finally using bow for the question 'Will you help me and tell me about yourself more' , the above are the responses we got using bow and the smiliarity value of responses, we consider the response with highest similarity
index_value = cosine_value.argmax() # returns the index number of highest value
index_value 
194
(Question)
'Will you help me and tell me about yourself more'
df['Text Response'].loc[index_value] # The text at the above index becomes the response for the question
"I'm glad to help. What can I do for you?"
tf-idf
# using tf-idf

tfidf=TfidfVectorizer() # intializing tf-id 
x_tfidf=tfidf.fit_transform(df['lemmatized_text']).toarray() # transforming the data into array
# returns all the unique word from data with a score of that word

df_tfidf=pd.DataFrame(x_tfidf,columns=tfidf.get_feature_names()) 
df_tfidf.head()
abort	about	absolutely	abysmal	actually	adore	advice	advise	affirmative	afraid	afternoon	again	age	agree	ah	ahah	ahaha	ahahah	ahahaha	ahead	all	almost	alone	already	alright	alrighty	also	always	amaze	amazing	an	and	angry	annoy	annoying	annul	answer	any	anymore	anything	...	whats	whazzup	when	where	wheres	which	who	whole	why	wife	will	wise	with	woah	wonderful	wooow	work	world	worry	worthless	would	wow	wrong	xd	ya	yap	ye	yea	yeah	year	yeh	yep	yes	yet	you	your	youre	yours	yourself	yup
0	0.0	0.407572	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	...	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.000000	0.330555	0.0	0.0	0.000000	0.0
1	0.0	0.000000	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	...	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.218768	0.000000	0.0	0.0	0.000000	0.0
2	0.0	0.000000	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	...	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.000000	0.000000	0.0	0.0	0.641790	0.0
3	0.0	0.000000	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	...	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.000000	0.000000	0.0	0.0	0.641790	0.0
4	0.0	0.453790	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	...	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.0	0.000000	0.000000	0.0	0.0	0.608937	0.0
5 rows × 505 columns

similarity
Question1 ='Tell me about yourself.'
Question_lemma1 = text_normalization(Question1)
Question_tfidf = tfidf.transform([Question_lemma1]).toarray() # applying tf-idf
cos=1-pairwise_distances(df_tfidf,Question_tfidf,metric='cosine')  # applying cosine similarity
cos
array([[0.56511191],
       [0.        ],
       [0.39080996],
       ...,
       [0.        ],
       [0.        ],
       [0.        ]])
df['similarity_tfidf']=cos # creating a new column 
df_simi_tfidf = pd.DataFrame(df, columns=['Text Response','similarity_tfidf']) # taking similarity value of responses for the question we took
df_simi_tfidf.head() 
Text Response	similarity_tfidf
0	Just think of me as the ace up your sleeve.	0.565112
1	I can help you work smarter instead of harder	0.000000
2	I can help you work smarter instead of harder	0.390810
3	I can help you work smarter instead of harder	0.390810
4	I can help you work smarter instead of harder	1.000000
df_simi_tfidf_sort = df_simi_tfidf.sort_values(by='similarity_tfidf', ascending=False) # sorting the values
df_simi_tfidf_sort.head(10)
Text Response	similarity_tfidf
4	I can help you work smarter instead of harder	1.000000
16	I can help you work smarter instead of harder	0.771758
9	I can help you work smarter instead of harder	0.759428
8	I can help you work smarter instead of harder	0.651909
379	I should get one. It's all work and no play la...	0.594479
500	The virtual world is my playground. I'm always...	0.590474
0	Just think of me as the ace up your sleeve.	0.565112
6	I can help you work smarter instead of harder	0.514553
48	I'm not programmed for that exact question. Tr...	0.445403
24	I'm a relatively new bot, but I'm wise beyond ...	0.434832
threshold = 0.2 # considering the value of p=smiliarity to be greater than 0.2
df_threshold = df_simi_tfidf_sort[df_simi_tfidf_sort['similarity_tfidf'] > threshold] 
df_threshold
Text Response	similarity_tfidf
4	I can help you work smarter instead of harder	1.000000
16	I can help you work smarter instead of harder	0.771758
9	I can help you work smarter instead of harder	0.759428
8	I can help you work smarter instead of harder	0.651909
379	I should get one. It's all work and no play la...	0.594479
500	The virtual world is my playground. I'm always...	0.590474
0	Just think of me as the ace up your sleeve.	0.565112
6	I can help you work smarter instead of harder	0.514553
48	I'm not programmed for that exact question. Tr...	0.445403
24	I'm a relatively new bot, but I'm wise beyond ...	0.434832
11	I can help you work smarter instead of harder	0.390810
3	I can help you work smarter instead of harder	0.390810
2	I can help you work smarter instead of harder	0.390810
1203	Lovely, thanks.	0.317730
1527	Probably I won't be able to give you the right...	0.293930
1526	Probably I won't be able to give you the right...	0.293930
15	I can help you work smarter instead of harder	0.284758
5	I can help you work smarter instead of harder	0.282998
878	Okay then.	0.278265
515	Of course I am.	0.277953
1436	Thanks! The feeling is mutual.	0.275350
791	Cancelled. Go on with the commands!	0.258578
1030	That's all right. I forgive you.	0.257507
806	Cancelled. Go on with the commands!	0.250630
1037	That's all right. I forgive you.	0.243373
516	Of course I am.	0.239825
330	Thanks, I try.	0.238327
341	Thanks, I try.	0.237712
1403	Thanks! The feeling is mutual.	0.237025
1208	Lovely, thanks.	0.232481
285	Oh no! My best work is yet to come.	0.226665
184	I'm glad to help. What can I do for you?	0.221686
817	Cancelled. Go on with the commands!	0.221333
381	I should get one. It's all work and no play la...	0.217804
382	I should get one. It's all work and no play la...	0.217804
332	Thanks, I try.	0.216600
714	Good deal.	0.215417
214	I'm glad to help. What can I do for you?	0.210776
1377	So I see. What can I help you with today?	0.208397
40	Can you try asking it a different way?	0.207035
996	Hug it out. You'll feel better afterwards.	0.201679
1000	Hug it out. You'll feel better afterwards.	0.201679
1003	Hug it out. You'll feel better afterwards.	0.201679
1518	Probably I won't be able to give you the right...	0.200153
by using tfidf for the question 'Will you help me and tell me about yourself more' , the above are the responses we got and the smiliarity value of responses, we consider the response with highest similarity
index_value1 = cos.argmax() # returns the index number of highest value
index_value1
4
Question1
'Tell me about yourself.'
df['Text Response'].loc[index_value1]  # returns the text at that index
'I can help you work smarter instead of harder'
Model Using Bag of Words
# Function that removes stop words and process the text

def stopword_(text):   
    tag_list=pos_tag(nltk.word_tokenize(text),tagset=None)
    stop=stopwords.words('english')
    lema=wordnet.WordNetLemmatizer()
    lema_word=[]
    for token,pos_token in tag_list:
        if token in stop:
            continue
        if pos_token.startswith('V'):
            pos_val='v'
        elif pos_token.startswith('J'):
            pos_val='a'
        elif pos_token.startswith('R'):
            pos_val='r'
        else:
            pos_val='n'
        lema_token=lema.lemmatize(token,pos_val)
        lema_word.append(lema_token)
    return " ".join(lema_word) 
# defining a function that returns response to query using bow

def chat_bow(text):
    s=stopword_(text)
    lemma=text_normalization(s) # calling the function to perform text normalization
    bow=cv.transform([lemma]).toarray() # applying bow
    cosine_value = 1- pairwise_distances(df_bow,bow, metric = 'cosine' )
    index_value=cosine_value.argmax() # getting index value 
    return df['Text Response'].loc[index_value]
chat_bow('hi there')
'Hey!'
chat_bow('Your are amazing')
'Terrific!'
chat_bow('i miss you')
"I've been right here all along!"
Model Using tf-idf
# defining a function that returns response to query using tf-idf

def chat_tfidf(text):
    lemma=text_normalization(text) # calling the function to perform text normalization
    tf=tfidf.transform([lemma]).toarray() # applying tf-idf
    cos=1-pairwise_distances(df_tfidf,tf,metric='cosine') # applying cosine similarity
    index_value=cos.argmax() # getting index value 
    return df['Text Response'].loc[index_value]
chat_tfidf('hi')
'Hey!'
chat_tfidf('how are you')
'Lovely, thanks.'
chat_tfidf('i love you')
"That's great to hear."
chat_tfidf('thanks for your support!')
"It's my pleasure to help."
chat_tfidf('will you reply accurately?')
"Oh, don't give up on me!"
chat_tfidf('will you marry me?')
'In the virtual sense that I can, sure.'
chat_tfidf('i miss you and i love you')
"I've been right here all along!"
chat_tfidf('ask sravya to read')
"Oops. Sorry about that. I'm still learning."
chat_tfidf('you are amazing and hope to see u soon.')
'Bye.'
chat_tfidf('please listen to me')
"I'm glad to help. What can I do for you?"
