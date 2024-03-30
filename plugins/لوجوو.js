import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw '*[❗𝐈𝐍𝐅𝐎❗] ¿𝙲𝙾𝙼𝙾 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾?*\n—◉ _#logo (efecto) (texto)_\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n—◉ _#logo 3d-deep-sea-metal Mystic_\n\n*[❗] 𝙲𝚄𝙰𝙽𝙳𝙾 𝙻𝙴𝚂 𝙳𝙸𝙶𝙰 𝚀𝚄𝙴 𝙷𝙰𝙲𝙴 𝙵𝙰𝙻𝚃𝙰 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙴𝙻 𝚄𝚂𝙾 𝚂𝙴𝚁𝙸𝙰:*\n—◉ _#logo (efecto) (texto1|texto2)_\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n—◉ _#logo Wolf-Logo-Galaxy Mystic|Bot_\n\n*<𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑬𝑭𝑬𝑪𝑻𝑶𝑺/>*\n\n° ඬ⃟📝 #logo ' + effects.map(v => v.title).join('\n° ඬ⃟📝 #logo ')
effect = effect.toLowerCase()
if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙴𝙵𝙴𝙲𝚃𝙾 ${effect} 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙴𝙵𝙴𝙲𝚃𝙾𝚂*`
let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart()
if (text.includes(split)) text = text.split(split)
text = Array.isArray(text) ? text : [text]
let res = await textpro(effect, ...text)
if (typeof res == 'number') throw res == -1 ? `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙴𝙵𝙴𝙲𝚃𝙾 ${effect} 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙴𝙵𝙴𝙲𝚃𝙾𝚂*` : `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 ${usedPrefix + command} ${effect} ${new Array(res).fill('texto').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`
let result = await axios.get(res, {
responseType: 'arraybuffer'
})
await conn.sendFile(m.chat, result.data, 'Error.jpg', `*𝚃𝙾𝙼𝙰 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙰!!*\n*𝙴𝙵𝙴𝙲𝚃𝙾: ${effect}*`, m)
}
handler.help = ['logos']
handler.tags = ['nulis']
handler.command = /^(logo|logos)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
    "title": "3d-deep-sea-metal",
    "url": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
  },
  {
    "title": "American-flag-3D",
    "url": "https://textpro.me/create-american-flag-3d-text-effect-online-1051.html"
  },
  {
    "title": "3D-sci-fi",
    "url": "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
  },
  {
    "title": "3D-rainbow-color-calligraphy",
    "url": "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
  },
  {
    "title": "3D-water-pipe",
    "url": "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
  },
  {
    "title": "Halloween-skeleton",
    "url": "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
