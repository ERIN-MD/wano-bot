import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[❗مساعده❗] قم بالرد علي الفيديو اللي عايز تحولوا لصوت*`;
  const media = await q.download();
  if (!media) throw '*[❗𝐈𝐍𝐅𝐎❗] لقد حصل خطأ من حجم الفيديو او غيره*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*لا يدعم*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^(mp3|لصوت)$/i;
export default handler;
