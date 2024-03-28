
let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

  let chat = global.db.data.chats[m.chat]
  if (!chat.welcome) throw `✳️ لاستخدام هذا الأمر، يجب تفعيل الترحيب بواسطة *${usedPrefix}تشغيل* الترحيب`
  let te = `
   ┌─⊷ *التجارب*
  ▢ الترحيب
  ▢ المغادره
  ▢ رفع
  ▢ خفض
  └───────────
  
  📌 مثال :
  
  *${usedPrefix + command}* الترحيب @منشن`

if (!event) return await m.reply(te) 

let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`✅ simulating ${event}...`)
switch (event.toLowerCase()) {
        case 'add':
        case 'bienvenida':
        case 'invite':
        case 'الترحيب':
           act = 'add'
         break 
        case 'المغادره':
        case 'despedida':
        case 'المغادره':
        case 'remove':
         act = 'remove'
        break

        case 'رفع':
        case 'promover':
          act = 'promote'
        break

        case 'خفض':
        case 'degradar':
         act = 'demote'
        break

default:

throw te
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})
}
handler.help = ['simulate <event> @user']
handler.tags = ['group']
handler.command = ['تجربه', 'simulate'] 
handler.admin = true
handler.group = true

export default handler
