import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] مثال للاستخدام الصحيح ${usedPrefix + command}* https://getstickerpack.com/stickers/flork-memes-4-1`
try {
let url = text
let res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': true }}, { quoted: m })
await delay(5000)
}} catch {   
await m.reply('*[❗] خطأ يرجى المحاولة مرة أخرى*')  
}}
handler.command = /^حزمة|حزمه|حزمة-استيكر$/i
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
