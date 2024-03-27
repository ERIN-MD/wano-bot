import axios from 'axios';

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    const response = await axios.get('https://telegra.ph/file/bdbdda3294d2f65bd5c23.jpg', {
   
    });

    const memeData = response.data;
    const imageUrl = memeData.url;
    const title = memeData.title;

    
    conn.sendFile(m.chat, imageUrl, 'meme.jpg', title, m);
    m.react('😆');
  } catch (error) {
    console.error(error);
    m.reply('Sorry, an error occurred while fetching the meme.');
  }
};

handler.help = ['meme'];
handler.tags = ['fun'];
handler.command = ['meme', 'memes'];
handler.diamond = false;

export default handler;
