import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗ خطأ ❗] حط اسم ${usedPrefix + command} كانيكي*`;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙴𝙽𝙳𝙾 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾\n𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `┏─━═║✠║◦¦🖤¦◦║✠║═━─┓\n『❀┇𝙆𝘼𝙉𝙀𝙆𝙄☞︎︎︎🖤☜︎︎𝐁𝐎𝐓┇❀』\nالـطـلـب: ${text}\n𝙑𝙀𝙉𝙊𝙈 𝘼𝙉𝘿 𝙎𝙊𝙆𝙐𝙉𝘼\n┗─━═║✠║◦¦🖤¦◦║✠║═━─┛`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(صوره|image|imagen)$/i;
export default handler;
