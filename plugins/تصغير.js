
import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '* فين الرابط ؟*\n*ضيف رابط يحب*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[❗] خطأ اتاكد انك حطيت رابط *`
let done = `*✅ تم تنفيذ المهمة بنجاح!!*\n\n*الرابط قبل التقصير:*\n${text}\n*الرابط بعد التقصير:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|تصغير|قص|تقصير)$/i
handler.limit = 1
handler.register = true
handler.fail = null
export default handler





