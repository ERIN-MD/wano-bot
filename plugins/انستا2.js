import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*يجب عليك إعطاء رابط أي فيديو أو صورة أو ريل من Instagram*`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`${gurubot}/igdlv1?url=${text}`);
  } catch (error) {
    throw `حدث خطأ: ${error.message}`;
  }

  let api_response = await res.json();

  if (!api_response || !api_response.data) {
    throw `لم يتم العثور على فيديو أو صورة أو رد غير صالح من الAPI.`;
  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type;
    const mediaURL = mediaData.url_download;

    let cap = `هذا هو ${mediaType.toUpperCase()} >,<`;

    if (mediaType === 'video') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.mp4', cap, m);
    } else if (mediaType === 'image') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.jpg', cap, m);
    }
  }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagram|انستا|ig|انستجرام)$/i;

export default handler;
