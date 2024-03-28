import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*مثال على استخدام الأمر ${usedPrefix + command} خلفيات*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `🔎 *نتيجة البحث:* ${text}\n🔗 *رابط* ${link}\n🌎 *محرك البحث:* جوجل*`
conn.sendButton(m.chat, captionn, author, link, [['🔄 التالي 🔄', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|صورة)$/i
export default handler
