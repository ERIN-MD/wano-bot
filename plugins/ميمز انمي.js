let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "🌌",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['ميمز']
handler.tags = ['anime']
handler.command = /^(ميم|ميمز)$/i
handler.limit = false

export default handler

const dir = [
"https://telegra.ph/file/f9138226511b3a30e958b.jpg",
"https://telegra.ph/file/8281fdf957ebca93aec0f.jpg",
"https://telegra.ph/file/3c6dd91466c9ed89d2bf7.jpg",
"https://telegra.ph/file/8bcad0c566c5f51ffe5bb.jpg",
"https://telegra.ph/file/4ac11fe77b659d5168b1e.jpg",
"https://telegra.ph/file/c3fcd3e486c6a3bee6f4f.jpg",
"https://telegra.ph/file/31de70933034c724b74f1.jpg",
"https://telegra.ph/file/2d249ca2b62c18af6baa3.jpg",
"https://telegra.ph/file/ef8ebed7d971ce6de5ee9.jpg",
"https://telegra.ph/file/777fb5cb0f6be330f9b8a.jpg",
"https://telegra.ph/file/20aef78978a92b8b0444b.jpg",
"https://telegra.ph/file/20bc0e05daf3272ea89b9.jpg",
"https://telegra.ph/file/a915d3752bac387b81adf.jpg",
"https://telegra.ph/file/c20048814324dd1a1bb77.jpg",
"https://telegra.ph/file/3b945a8a14851ece29de7.jpg",
"https://telegra.ph/file/abf7e03745ca2d298a9c1.jpg",
"https://telegra.ph/file/13e4a77349596c5ab8a79.jpg",
"https://telegra.ph/file/32bc65b3c0baa1eb6c284.jpg",
"https://telegra.ph/file/1c231e0675b7f6edd579a.jpg",
"https://telegra.ph/file/c564473a41ab8405dc3b9.jpg",
"https://telegra.ph/file/aa8bd2a777b01d0b24f4d.jpg",
"https://telegra.ph/file/a915d3752bac387b81adf.jpg",
"https://telegra.ph/file/59c075e64bdd0e17b659f.jpg",
"https://telegra.ph/file/f7c59f1787705d36043ca.jpg",
"https://telegra.ph/file/c20048814324dd1a1bb77.jpg",
"https://telegra.ph/file/d9153d75fc60d64026525.jpg",
"https://telegra.ph/file/3b945a8a14851ece29de7.jpg",
"https://telegra.ph/file/1c678a25b8b6482bc3cba.jpg",
"https://telegra.ph/file/cbc63680e04511756d57a.jpg",
"https://telegra.ph/file/f7c59f1787705d36043ca.jpg",
"https://telegra.ph/file/58081f8a94dbd1d1caf40.jpg",
"https://telegra.ph/file/e1539e82d5bc96bc9f15e.jpg",
"https://telegra.ph/file/36efa93ee22207c36ad2d.jpg",
"https://telegra.ph/file/6df3e879dd9c2e908859f.jpg",
"https://telegra.ph/file/cbc63680e04511756d57a.jpg",
"https://telegra.ph/file/65dc15eb996d69742fcb9.jpg",
"https://telegra.ph/file/986928ae97ba48c5f54be.jpg",
"https://telegra.ph/file/92379479bbe99f312f13f.jpg",
"https://telegra.ph/file/c46fda1ffbbaa3c406a29.jpg",
"https://telegra.ph/file/0d32e11e4a0dae13dac3d.jpg",
"https://telegra.ph/file/13a65df594224f0c46561.jpg",
"https://telegra.ph/file/17d2fd7d6e0fbfe0d74dd.jpg",
"https://telegra.ph/file/98acc5caa337ba06407b5.jpg",
"https://telegra.ph/file/102561f89b0967f27ce63.jpg",
"https://telegra.ph/file/e4f06eb175994ef6ebd41.jpg",
"https://telegra.ph/file/bf3a36c8f30e56dcbbfa5.jpg",
"https://telegra.ph/file/3a5b3ea59347b2f8fb805.jpg",
"https://telegra.ph/file/60262d7d56b4352993e88.jpg",

'',
]
