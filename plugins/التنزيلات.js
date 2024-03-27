const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await lolivid[Math.floor(Math.random() * lolivid.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: `*ʟᴏʟɪ ɪѕ ᴄᴜᴛᴇ 🥺*`}, {quoted: m});
};
handler.help = ['lolivid'];
handler.tags = ['random'];
handler.command = /^(التنزيلات|lolivideos|lolívid)$/i;
export default handler;

global.lolivid = [
  'https://telegra.ph/file/f4a1b6c531ac07355ef82.mp4  
  ⛩️│الـتـنزيـل│⛩️

*🏮 │انستغرام*
*🏮 │انستا*
*🏮 │شغل*
*🏮 │تيكتوك*
*🏮 │تويتر*
*🏮 │اغنية*
*🏮 │بحث*
*🏮 │فيديو*
*🏮 │تطبيق*
*🏮 │صوره*',
  
];
