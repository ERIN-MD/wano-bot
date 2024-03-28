let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "🎥",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['ايديت3']
handler.tags = ['anime']
handler.command = /^(اديت3|ايديت3)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/0de3d724cc7ff6719e671.mp4',
'https://telegra.ph/file/8711c85e060a892ecce8d.mp4',
'https://telegra.ph/file/4382948309a4e0e870230.mp4',
'https://telegra.ph/file/fd37dd25204898350a696.mp4',
'https://telegra.ph/file/bb75fad7c528982d38765.mp4',
'https://telegra.ph/file/dd7792e5c4ad8c3619df1.mp4',
'https://telegra.ph/file/2a709171b97bfdfa52af0.mp4',
'https://telegra.ph/file/fcf4b7a7647cd96882dd9.mp4',
'https://telegra.ph/file/b918b17e2ec2601ed8e1d.mp4',
'https://telegra.ph/file/cbaa57c12c567828e1e21.mp4',
'https://telegra.ph/file/47af25d732650b1ab7487.mp4',
'',
'',
'',


'',
]
