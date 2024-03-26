import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

let yoMamaJokeHandler = async (m, { conn, text }) => {
  try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`);

    if (!res.ok) {
      throw new Error(`فشل طلب API مع الحالة ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let yoMamaJoke = `${json.pickupline}`;
    
    let translation = await translate(yoMamaJoke, { to: 'ar' });

    let translatedYoMamaJoke = translation.text;

    m.reply(translatedYoMamaJoke);
  } catch (error) {
    console.error(error);
  }
};

yoMamaJokeHandler.help = ['yomamajoke'];
yoMamaJokeHandler.tags = ['fun'];
yoMamaJokeHandler.command = /^(هبد)$/i;

export default pickupLineHandler;
