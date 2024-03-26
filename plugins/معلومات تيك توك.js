
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ أدخل اسم مستخدم TikTok `
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *معلومات تيك توك*」 
▢ *🔖الرقم:* ${res.name}
▢ *🔖اسم المستخدم:* ${res.username}
▢ *👥المتابعون:* ${res.followers}
▢ *🫂المتابعين:* ${res.following}
▢ *📌الوصف:* ${res.desc}

▢ *🔗 الرابط* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['downloader']
handler.command = /^معلومات-تيكتوك)$/i

export default handler
