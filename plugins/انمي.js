import {translate} from '@vitalets/google-translate-api';
import { Anime } from '@shineiichijo/marika';

const client = new Anime();

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) return m.reply(`*[❗] يرجى إدخال اسم أنمي للبحث.*`);
  try {
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    let resultes = await translate(`${result.background}`, { to: 'ar', autoCorrect: true });
    let resultes2 = await translate(`${result.synopsis}`, { to: 'ar', autoCorrect: true });
    let AnimeInfo = `
🎀 • *العنوان:* ${result.title}
🎋 • *الصيغة:* ${result.type}
📈 • *الحالة:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *إجمالي الحلقات:* ${result.episodes}
🎈 • *المدة:* ${result.duration}*
✨ • *مستند إلى:* ${result.source.toUpperCase()}
💫 • *تاريخ الإصدار:* ${result.aired.from}
🎗 • *انتهى في:* ${result.aired.to}
🎐 • *الشهرة:* ${result.popularity}
🎏 • *المفضلة:* ${result.favorites}
🎇 • *التقييم:* ${result.rating}
🏅 • *التصنيف:* ${result.rank}
♦ • *التريلر:* ${result.trailer.url}
🌐 • *رابط الأنمي:* ${result.url}
🎆 • *الخلفية:* ${resultes.text}
❄ • *الملخص:* ${resultes2.text}`;

    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] خطأ، يرجى المحاولة مرة أخرى.*`;
  }
};

handler.help = ['anime']
handler.tags = ['anime']
handler.command = /^(انمي|animeinfo)$/i;
export default handler;
