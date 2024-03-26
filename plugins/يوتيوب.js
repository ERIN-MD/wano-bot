import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*هذا الامر خاص بالتحميل من اليوتوب* مثال : \n *.yt* https://youtube.com/@MR_SA3A?si=DVhTpF2J9Se-JZzg'
await m.reply(`*جاري تحميل الفيديو المرجو الانتظار قليلا يا عزيزي* `)
try {
let qu = args[1] || '720'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢: ${ttl}\n▢ 𝙿: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=85faf717d0545d14074659ad&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃: ${n}\n▢ 𝙿: ${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, 'تعذر تحميل الفيديو راسل صاصاا لتعرف السبب', m)}
}}
handler.command = /^video|yt|يوتيوب$/i
export default handler
