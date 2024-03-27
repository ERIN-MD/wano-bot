//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*[✅] تم تغير الترحيب يحب*')
  } else throw `*[❗] ادخل رساله الترحيب الذي تريدها, مثال:*\n*❈↲ .تغير-الترحيب اهلا بك في مجموعتنا*\n*- @user (منشن)*\n*- @group (اسم الجروب)*\n*- @desc (الوصف)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['تغيرالترحيب'] 
handler.admin = true
handler.owner = false

export default handler
