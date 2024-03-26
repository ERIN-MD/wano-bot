import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
const res = (await axios.get(`https://raw.githubusercontent.com/YosefZoro1/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)).data;
  const haha = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m);
// conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)
  m.react('🖼');
};
handler.command = handler.help = ['اكيرا', 'اكياما', 'اناا', 'اسونا', 'أيوزاوا', 'بوروتو', 'تشيهو', 'شيتوجي', 'ديدارا', 'ايرزا', 'الينا', 'ايبا', 'ايميليا', 'هيستيا', 'هيناتا', 'اينوري', 'ايسوزي', 'ايتاتشي', 'ايتوري', 'كاجا', 'كاجيرو', 'كاوري', 'كانيكي', 'كوترو', 'جوزو', 'مادارا', 'ميكاسا', 'ميكو', 'ميناتو', 'ناروتو', 'نيزوكو', 'ساجيري', 'ساسكي', 'ساكورا', 'كوسبلاي'];
handler.tags = ['anime'];
export default handler;
