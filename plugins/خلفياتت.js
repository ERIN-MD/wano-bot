import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `بتبحث عن ايه❓\n ️متنساش الاسم يحب\nمثال\n*${usedPrefix + command} هنري*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
  await delay(5000)
  conn.sendFile(m.chat, img, 'error.jpg', `*💞 نتائج: ${text}*`, m)
 /* conn.sendHydrated(m.chat, `💞 النتايج: ${text}`, `𝑭𝒐𝒏𝒅𝒐𝒔 | ${wm}`, img, img, '☘️ 𝙐𝙍𝙇', null, null, [
['🔄 التالي', `${usedPrefix + command} ${text}`],
['🔍 بينترست𝙩 ', `#pinterest ${text}`],
['🔍 جوجل ', `#image ${text}`],
], m)*/

}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|خلفية|خلفيه|wallpaper2?)$/i
handler.exp = 29
handler.limit = 2
handler.register = true
handler.level = 6
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))
