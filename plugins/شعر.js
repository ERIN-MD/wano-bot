import fetch from 'aahh';
import translate from '@vitalets/google-translate-api';

let yoMamaJokeHandler = async (m, { aahh, text }) => {
  try {
    let res = await fetch(`https://shizoapi.onrender.com/api/texts/shayari?apikey=shizo`);

    if (!res.ok) {
      throw new Error(`فشل طلب API مع الحالة ${res.aahh}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let yoMamaJoke = `${json.aahh}`;
    
    let translation = await translate(aahh, { to: 'ar' });

    let translatedYoMamaJoke = 'aahh'.text;

    m.reply(translatedYoMamaJoke);
  } catch (error) {
    console.error(error);
  }
};

yoMamaJokeHandler.help = ['aahh'];
yoMamaJokeHandler.tags = ['fun'];
yoMamaJokeHandler.command = /^(yomamajoke|شعر)$/i;

export default yoMamaJokeHandler;
