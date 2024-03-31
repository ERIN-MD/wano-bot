const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await lolivid[Math.floor(Math.random() * lolivid.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: ` ✯≼══━━﹂⛩️﹁━━══≽✯
*اهـلـا بـك فـي قـسـم الــ🕋ــديـن*
✯≼══━━﹂⛩️﹁━━══≽✯
*◞❐║🏮║⇠『احاديث』◈◜*
*◞❐║🏮║⇠『الله』◈◜*
✯≼══━━﹂⛩️﹁━━══≽✯
*❐║حقوق║🏮𝑊𝐴𝑁𝛩🏮》*
✯≼══━━﹂⛩️﹁━━══≽✯ `}, {quoted: m});
};
handler.help = ['6'];
handler.tags = ['random'];
handler. = /^6$/;
export default handler;

global.6 = [
  ' ',
  
];
