//*رد بوت ساسكي تبع ايتاتشيlet handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^توكا بحبك|توكا عاوزه اتجوزك|بحبك|بموت فيكي|نتجوز|توكا هنتجوز امتي|توكا انت ليا|توكا بموت فيكي$/i.test(m.text)) { 
 responses = [ 
 'بس ياض 🤧🥀 ',  
 'هاا؟😡',  
 'و انا',  
 'ممنوع😾',  
 'احترم نفسك🤧 ',  
 'اسكت يااااااض بطل هبل 😡    ',  
 'طيب و بعدين '  
 ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
 responses = [ 
 'وعليكم السلام',  
 'وعليكم السلام منور',  
 ' وعليكم السلام كيفك',  
 'وعليكم السلام ورحمة الله وبركاته' 
 ]; 
 }else if (/^ توكا عامله ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشبب$/i.test(m.text)) { 
 responses = [ 
 'كل شيء بخير الحمد لله ',  
 ' مش عارف  ',  
 ' الحمد لله ماشي الحال ',  
 'الحمد الله',  
 ' لو انت كويس انا كويس'
       ]; 
 }else if (/^.عشوائي$/i.test(m.text)) { 
 responses = [ 
 '*اسم بنتك المستقبلي 😭 (ميكاسا) * ',  
 '*اسم بنتك المستقبلي 😭 (ميكاسا) *',  
 '*اسم ولدك المستقبلي 😭 (هاري) *',  
 '*اسم ولدك المستقبلي 😭 (ايتاتشي) *',  
 '*اسم ولدك المستقبلي 😭 (رايلي🤍) *',
       '*اسم بنتك المستقبلي 😭 (هيرميون) * ',  
 '*اسم بنتك المستقبلي 😭 (ميسا) *',  
 '*اسم ولدك المستقبلي 😭 (ميلو) *',  
 '*اسم ولدك المستقبلي 😭 (لايت) *',
'*اسم بنتك المستقبلي 😭 (روبين) * ',  
 '*اسم بنتك المستقبلي 😭 (نامي) *',  
 '*اسم ولدك المستقبلي 😭 (لولايت) *',  
 '*اسم ولدك المستقبلي 😭 (رين.) *',
'*اسم بنتك المستقبلي 😭 (ليلي) * ',  
 '*اسم بنتك المستقبلي 😭 (هانكوك) *',  
 '*اسم ولدك المستقبلي 😭 (لوفي) *',  
 '*اسم ولدك المستقبلي 😭 (زورو) *',
'*اسم بنتك المستقبلي 😭 (اني) * ',  
 '*اسم بنتك المستقبلي 😭 (هانجي) *',  
 '*اسم ولدك المستقبلي 😭 (ايس) *',  
 '*اسم ولدك المستقبلي 😭 (سانجي) *',
'*اسم بنتك المستقبلي 😭 (نيزوكو) * ',  
 '*اسم بنتك المستقبلي 😭 (تشارمي) *',  
 '*اسم ولدك المستقبلي 😭 (ريك) *',  
 '*اسم ولدك المستقبلي 😭 (نيغن) *',
'*اسم بنتك المستقبلي 😭 (ساشا) * ',  
 '*اسم بنتك المستقبلي 😭 (انيا) *',  
 '*اسم ولدك المستقبلي 😭 (بوتر) *',  
 '*اسم ولدك المستقبلي 😭 (يوهان) *',
'*اسم بنتك المستقبلي 😭 (اونوهانا) * ',  
 '*اسم بنتك المستقبلي 😭 (ياتشيرو) *',  
 '*اسم ولدك المستقبلي 😭 (ايرين) *',  
 '*اسم ولدك المستقبلي 😭 (شارلوك) *',
 ];
 }else if (/^.دولتي$/i.test(m.text)) { 
 responses = [ 
 '*🌌 دولتك 🌌 ❈↲ هي  🏳️‍🌈*',  
 '*🌌 دولتك 🌌 ❈↲ هي  🇧🇩*',  
 '*🌌 دولتك 🌌 ❈↲ هي  🇾🇪*',  
 '*🌌 دولتك 🌌 ❈↲ هي  🇹🇷*',  
 ' *🌌 دولتك 🌌 ❈↲ هي  🇬🇧*' ,
       '*🌌 دولتك 🌌 ❈↲ هي  🇺🇸*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇪🇭*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇩*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇾*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇰🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇰🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇶🇦*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇦*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇵🇰*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇮🇳*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇯🇵*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇱🇧*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇴*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇦🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🏴‍☠️*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇵🇹*',
        '*🌌 دولتك 🌌 ❈↲ هي  🏳️‍⚧️*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇮🇱*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇦🇺*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇲🇽*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇯🇵*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇱🇾*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇳🇱*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇾*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇪🇸*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇫🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇨🇮*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇳🇫*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇧🇪*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇵🇭*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🏴‍☠️*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇦*'

 ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
 responses = [ 
 ' عاشت ايدك ✨❤️',  
 'تسلم ايدك ✨❤️ ',  
 'عاش ✨❤️ ',  
 'اوكي ✨❤️'   
]; 
 }else if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
 responses = [ 
 '*اسمي توكا يحيوان*🤧🥀',  
 ' اسمي توكا يحيوان*🤧🥀',  
 ' ترا اتت بتجرحني لما تقول بوت*🤧💔🥀',  
 'اسمي توكا يحيوان 😔⚡',  
 ' *ياكلب اسمي توكا*😒🖤' 
 ]; 
 }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
 responses = [ 
 'صباحك انا ✨💜',  
 'صباح النور ✨💜 ',  
 ' صباح الزفت ✨💜',  
 'انت صحيت وانا رايح انام 🐦👋🏻 ',  
 'انت صباحي 😭💕' 
 ]; 
 }else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) { 
 responses = [ 
 'العفو✨🥺♥️',  
 'مو مشكة✨💫 ',  
 ' الشكر لله ✨💜',  
 'العفو يحلو ✨💜' 
]; 
 }else if (/^كانيكي|كانيكي خرا|احسن من كانيكي$/i.test(m.text)) { 
 responses = [ 
 'كانيكي عمك🥺🌌',  
 'كانيكي عمكم🥺🌌',  
 'كانيكي فخم🥺🌌',  
 'جوزي😩🌌',  
 'تقصد عمك🥺🌌' 
 ]; 
 }else if (/^كل ده نور|الجروب نور كده ليه|ايه النور ده|منورين الجدد|منورين|منور $/i.test(m.text)) { 
 responses = [ 
 'بنوري✨♥️',  
 'النقابة منور فعلا✨♥️',  
 '✨♥️',  
 'النقابة منور✨💜',  
 '✨💜' 
 ]; 
 }else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
 responses = [ 
 'ماراح اسكت 🙃 ', 
              'من انت عشان تسكتني 😒',  
                 'اكتم انت',  
 'لو رجال سكتني 😡 ',  
 'اسكت انت'  
       ]; 
 }else if (/^مش بحبك|بكرهك$/i.test(m.text)) { 
 responses = [ 
 '*مين قال اني احبك 😒🖤*', 
              '*ههه يعني انا الي بحبك اوي 🖤'

   ]; 
 }else if (/^تست|تشت$/i.test(m.text)) { 
 responses = [ 
 'تست تست',  
 'تست ', 
  ]; 
 }else if (/^توكا|توكااا$/i.test(m.text)) { 
 responses = [ 
   
 'روح توكا 🥺💛',  
 'عين توكا 😩🌿 ', 
  ]; 
 }else if (/^جوزك مين|مين جوزك$/i.test(m.text)) { 
 responses = [ 
 'ڤينوم🤭♥️',  
 'ڤينوم🤭♥️ ', 
]; 
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;