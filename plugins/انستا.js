
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ أدخل اسم مستخدم Instagram\n\n📌مثال: ${usedPrefix + command} ` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖الرقم:* ${res.name} 
▢ *🔖اسم المستخدم:* ${res.username}
▢ *👥المتابعين:* ${res.followersH}
▢ *🫂المتابعة:* ${res.followingH}
▢ *📌النبذة:* ${res.description}
▢ *🏝️المنشورات:* ${res.postsH}

▢ *🔗 الرابط* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk|معلومات-انستا'] 

export default handler
