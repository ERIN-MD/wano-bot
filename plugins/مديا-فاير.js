
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {
	var limit
     if((isOwner || isPrems)) limit = 1200
     else limit = 100
   if (!args[0]) throw `✳️ أدخل رابط ميديافاير بجوار الأمر`
    if (!args[0].match(/mediafire/gi)) throw `❎ الرابط غير صحيح`
    m.react(rwait)
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(`https://image.thum.io/get/fullpage/${u}`)).buffer()
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize
    let caption = `
   ≡ *ميديافاير*

▢ *الرقم:* ${filename}
▢ *الحجم:* ${filesizeH}
▢ *الامتداد:* ${ext}
▢ *تم التحميل:* ${aploud}
${isLimit ? `\n▢ الملف يتجاوز حد التنزيل *+${limit} ميغابايت*\nقم بالترقية إلى حساب بريميوم لتكون قادرًا على تنزيل ملفات أكبر من *900 ميغابايت*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
    
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
}
handler.help = ['mediafire <url>']
handler.tags = ['downloader', 'premium']
handler.command = ['mediafire', 'ميديا-فاير'] 
handler.credit = true
handler.premium = false

export default handler
