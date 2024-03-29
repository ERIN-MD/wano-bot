import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw '*[❗𝐈𝐍𝐅𝐎❗] ¿𝙲𝙾𝙼𝙾 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾?*\n—◉ _#logo (efecto) (texto)_\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n—◉ _#logo 3d-deep-sea-metal Mystic_\n\n*[❗] 𝙲𝚄𝙰𝙽𝙳𝙾 𝙻𝙴𝚂 𝙳𝙸𝙶𝙰 𝚀𝚄𝙴 𝙷𝙰𝙲𝙴 𝙵𝙰𝙻𝚃𝙰 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙴𝙻 𝚄𝚂𝙾 𝚂𝙴𝚁𝙸𝙰:*\n—◉ _#logo (efecto) (texto1|texto2)_\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n—◉ _#logo Wolf-Logo-Galaxy Mystic|Bot_\n\n*<𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑬𝑭𝑬𝑪𝑻𝑶𝑺/>*\n\n° ඬ⃟💌 #logo ' + effects.map(v => v.title).join('\n° ඬ⃟💌 #logo ')
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
handler.command = /^(logo|logos|لوغو|لوجو)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
    "title": "l1",
    "url": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
  },
  {
    "title": "l2",
    "url": "https://textpro.me/create-american-flag-3d-text-effect-online-1051.html"
  },
  {
    "title": "l3",
    "url": "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
  },
  {
    "title": "l4",
    "url": "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
  },
  {
    "title": "l5",
    "url": "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
  },
  {
    "title": "l6",
    "url": "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
  },
  {
    "title": "l7",
    "url": "https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html"
  },
  {
    "title": "l8",
    "url": "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html"
  },
  {
    "title": "l9",
    "url": "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
  },
  {
    "title": "l10",
    "url": "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"
  },
  {
    "title": "l11",
    "url": "https://textpro.me/create-space-text-effects-online-free-1042.html"
  },
  {
    "title": "l12",
    "url": "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  },
  {
    "title": "l13",
    "url": "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"
  },
  {
    "title": "l14",
    "url": "https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html"
  },
  {
    "title": "l15",
    "url": "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"
  },
  {
    "title": "l16",
    "url": "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html"
  },
  {
    "title": "l17",
    "url": "https://textpro.me/create-green-horror-style-text-effect-online-1036.html"
  },
  {
    "title": "l18",
    "url": "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
  },
  {
    "title": "l19",
    "url": "https://textpro.me/create-berry-text-effect-online-free-1033.html"
  },
  {
    "title": "l20",
    "url": "https://textpro.me/create-layered-text-effects-online-free-1032.html"
  },
  {
    "title": "l21",
    "url": "https://textpro.me/online-thunder-text-effect-generator-1031.html"
  },
  {
    "title": "l22",
    "url": "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"
  },
  {
    "title": "l23",
    "url": "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
  },
  {
    "title": "l24",
    "url": "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
  },
  {
    "title": "l25",
    "url": "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
  },
  {
    "title": "l26",
    "url": "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
  },
  {
    "title": "l27",
    "url": "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
  },
  {
    "title": "l28",
    "url": "https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"
  },
  {
    "title": "l29",
    "url": "https://textpro.me/broken-glass-text-effect-free-online-1023.html"
  },
  {
    "title": "l30",
    "url": "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
  },
  {
    "title": "l31",
    "url": "https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html"
  },
  {
    "title": "l32",
    "url": "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"
  },
  {
    "title": "l33",
    "url": "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html"
  },
  {
    "title": "l34",
    "url": "https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html"
  },
  {
    "title": "l35",
    "url": "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
  },
  {
    "title": "l36",
    "url": "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"
  },
  {
    "title": "l37",
    "url": "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"
  },
  {
    "title": "l38",
    "url": "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
  },
  {
    "title": "l39",
    "url": "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"
  },
  {
    "title": "l40",
    "url": "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html"
  },
  {
    "title": "l41",
    "url": "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
  },
  {
    "title": "l42",
    "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
  },
  {
    "title": "l43",
    "url": "https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html"
  },
  {
    "title": "l44",
    "url": "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html"
  },
  {
    "title": "l45",
    "url": "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html"
  },
  {
    "title": "l46",
    "url": "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"
  },
  {
    "title": "l47",
    "url": "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"
  },
  {
    "title": "l48",
    "url": "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"
  },
  {
    "title": "l49",
    "url": "https://textpro.me/3d-gradient-text-effect-online-free-1002.html"
  },
  {
    "title": "l50",
    "url": "https://textpro.me/create-blackpink-logo-style-online-1001.html"
  },
  {
    "title": "l51",
    "url": "https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html"
  },
  {
    "title": "l52",
    "url": "https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html"
  },
  {
    "title": "l53",
    "url": "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"
  },
  {
    "title": "l54",
    "url": "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
  },
  {
    "title": "l55",
    "url": "https://textpro.me/sand-writing-text-effect-online-990.html"
  },
  {
    "title": "l56",
    "url": "https://textpro.me/sand-engraved-3d-text-effect-989.html"
  },
  {
    "title": "l57",
    "url": "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"
  },
  {
    "title": "l58",
    "url": "https://textpro.me/foil-balloon-text-effect-for-birthday-987.html"
  },
  {
    "title": "l59",
    "url": "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"
  },
  {
    "title": "l60",
    "url": "https://textpro.me/create-space-3d-text-effect-online-985.html"
  },
  {
    "title": "l61",
    "url": "https://textpro.me/metal-dark-gold-text-effect-984.html"
  },
  {
    "title": "l62",
    "url": "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
  },
  {
    "title": "l63",
    "url": "https://textpro.me/create-a-stone-text-effect-online-982.html"
  },
  {
    "title": "l64",
    "url": "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
  },
  {
    "title": "l65",
    "url": "https://textpro.me/1917-style-text-effect-online-980.html"
  },
  {
    "title": "l66",
    "url": "https://textpro.me/80-s-retro-neon-text-effect-online-979.html"
  },
  {
    "title": "l67",
    "url": "https://textpro.me/minion-text-effect-3d-online-978.html"
  },
  {
    "title": "l68",
    "url": "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
  },
  {
    "title": "l69",
    "url": "https://textpro.me/double-exposure-text-effect-black-white-976.html"
  },
  {
    "title": "l70",
    "url": "https://textpro.me/holographic-3d-text-effect-975.html"
  },
  {
    "title": "l71",
    "url": "https://textpro.me/create-3d-avengers-logo-online-974.html"
  },
  {
    "title": "l72",
    "url": "https://textpro.me/metal-purple-dual-effect-973.html"
  },
  {
    "title": "l73",
    "url": "https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html"
  },
  {
    "title": "l74",
    "url": "https://textpro.me/create-logo-style-marvel-studios-online-971.html"
  },
  {
    "title": "l75",
    "url": "https://textpro.me/deluxe-silver-text-effect-970.html"
  },
  {
    "title": "l76",
    "url": "https://textpro.me/color-full-luxury-metal-text-effect-969.html"
  },
  {
    "title": "l77",
    "url": "https://textpro.me/glossy-blue-metal-text-effect-967.html"
  },
  {
    "title": "l78",
    "url": "https://textpro.me/deluxe-gold-text-effect-966.html"
  },
  {
    "title": "l79",
    "url": "https://textpro.me/glossy-carbon-text-effect-965.html"
  },
  {
    "title": "l80",
    "url": "https://textpro.me/fabric-text-effect-online-964.html"
  },
  {
    "title": "l81",
    "url": "https://textpro.me/neon-text-effect-online-963.html"
  },
  {
    "title": "l82",
    "url": "https://textpro.me/new-year-cards-3d-by-name-960.html"
  },
  {
    "title": "l83",
    "url": "https://textpro.me/happ-new-year-card-firework-gif-959.html"
  },
  {
    "title": "l84",
    "url": "https://textpro.me/fullcolor-balloon-text-effect-958.html"
  },
  {
    "title": "l85",
    "url": "https://textpro.me/create-text-logo-3d-metal-online-957.html"
  },
  {
    "title": "l86",
    "url": "https://textpro.me/create-avatar-gold-online-956.html"
  },
  {
    "title": "l87",
    "url": "https://textpro.me/text-logo-3d-metal-silver-946.html"
  },
  {
    "title": "l88",
    "url": "https://textpro.me/text-logo-3d-metal-rose-gold-945.html"
  },
  {
    "title": "l89",
    "url": "https://textpro.me/text-logo-3d-metal-gold-944.html"
  },
  {
    "title": "l90",
    "url": "https://textpro.me/text-logo-3d-metal-galaxy-943.html"
  },
  {
    "title": "l91",
    "url": "https://textpro.me/xmas-cards-3d-online-942.html"
  },
  {
    "title": "l92",
    "url": "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
  },
  {
    "title": "l93",
    "url": "https://textpro.me/halloween-fire-text-effect-940.html"
  },
  {
    "title": "l94",
    "url": "https://textpro.me/metal-dark-gold-text-effect-online-939.html"
  },
  {
    "title": "l95",
    "url": "https://textpro.me/create-lion-logo-mascot-online-938.html"
  },
  {
    "title": "l96",
    "url": "https://textpro.me/create-wolf-logo-black-white-937.html"
  },
  {
    "title": "l97",
    "url": "https://textpro.me/create-wolf-logo-galaxy-online-936.html"
  },
  {
    "title": "l98"i,
    "url": "https://textpro.me/create-ninja-logo-online-935.html"
  },
  {
    "title": "l99",
    "url": "https://textpro.me/create-logo-joker-online-934.html"
  },
  {
    "title": "l100",
    "url": "https://textpro.me/wicker-text-effect-online-932.html"
  },
  {
    "title": "l101",
    "url": "https://textpro.me/natural-leaves-text-effect-931.html"
  },
  {
    "title": "l102",
    "url": "https://textpro.me/firework-sparkle-text-effect-930.html"
  },
  {
    "title": "l103",
    "url": "https://textpro.me/skeleton-text-effect-online-929.html"
  },
  {
    "title": "l104",
    "url": "https://textpro.me/red-foil-balloon-text-effect-928.html"
  },
  {
    "title": "l105",
    "url": "https://textpro.me/purple-foil-balloon-text-effect-927.html"
  },
  {
    "title": "l106",
    "url": "https://textpro.me/pink-foil-balloon-text-effect-926.html"
  },
  {
    "title": "l107",
    "url": "https://textpro.me/green-foil-balloon-text-effect-925.html"
  },
  {
    "title": "l108",
    "url": "https://textpro.me/cyan-foil-balloon-text-effect-924.html"
  },
  {
    "title": "l109",
    "url": "https://textpro.me/blue-foil-balloon-text-effect-923.html"
  },
  {
    "title": "l110",
    "url": "https://textpro.me/gold-foil-balloon-text-effect-922.html"
  },
  {
    "title": "l111",
    "url": "https://textpro.me/steel-text-effect-online-921.html"
  },
  {
    "title": "l112",
    "url": "https://textpro.me/ultra-gloss-text-effect-online-920.html"
  },
  {
    "title": "l113",
    "url": "https://textpro.me/denim-text-effect-online-919.html"
  },
  {
    "title": "l114",
    "url": "https://textpro.me/decorate-green-text-effect-918.html"
  },
  {
    "title": "l115",
    "url": "https://textpro.me/decorate-purple-text-effect-917.html"
  },
  {
    "title": "l116",
    "url": "https://textpro.me/peridot-stone-text-effect-916.html"
  },
  {
    "title": "l117",
    "url": "https://textpro.me/rock-text-effect-online-915.html"
  },
  {
    "title": "l118",
    "url": "https://textpro.me/lava-text-effect-online-914.html"
  },
  {
    "title": "l119",
    "url": "https://textpro.me/yellow-glass-text-effect-913.html"
  },
  {
    "title": "120",
    "url": "https://textpro.me/purple-glass-text-effect-912.html"
  },
  {
    "title": "l121",
    "url": "https://textpro.me/orange-glass-text-effect-911.html"
  },
  {
    "title": "l122",
    "url": "https://textpro.me/green-glass-text-effect-910.html"
  },
  {
    "title": "l123",
    "url": "https://textpro.me/cyan-glass-text-effect-909.html"
  },
  {
    "title": "l124",
    "url": "https://textpro.me/blue-glass-text-effect-908.html"
  },
  {
    "title": "l125",
    "url": "https://textpro.me/red-glass-text-effect-907.html"
  },
  {
    "title": "l126",
    "url": "https://textpro.me/purple-shiny-glass-text-effect-906.html"
  },
  {
    "title": "l127",
    "url": "https://textpro.me/captain-america-text-effect-905.html"
  },
  {
    "title": "l128",
    "url": "https://textpro.me/robot-r2-d2-text-effect-903.html"
  },
  {
    "title": "l129",
    "url": "https://textpro.me/rainbow-equalizer-text-effect-902.html"
  },
  {
    "title": "l130",
    "url": "https://textpro.me/toxic-text-effect-online-901.html"
  },
  {
    "title": "l131",
    "url": "https://textpro.me/pink-sparkling-jewelry-text-effect-899.html"
  },
  {
    "title": "l132",
    "url": "https://textpro.me/blue-sparkling-jewelry-text-effect-898.html"
  },
  {
    "title": "l133",
    "url": "https://textpro.me/green-sparkling-jewelry-text-effect-897.html"
  },
  {
    "title": "l134",
    "url": "https://textpro.me/purple-sparkling-jewelry-text-effect-896.html"
  },
  {
    "title": "l135",
    "url": "https://textpro.me/gold-sparkling-jewelry-text-effect-895.html"
  },
  {
    "title": "l136",
    "url": "https://textpro.me/red-sparkling-jewelry-text-effect-894.html"
  },
  {
    "title": "l137",
    "url": "https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html"
  },
  {
    "title": "l138",
    "url": "https://textpro.me/purple-glass-text-effect-online-892.html"
  },
  {
    "title": "l139",
    "url": "https://textpro.me/decorative-glass-text-effect-891.html"
  },
  {
    "title": "l140",
    "url": "https://textpro.me/chocolate-cake-text-effect-890.html"
  },
  {
    "title": "l141",
    "url": "https://textpro.me/strawberry-text-effect-online-889.html"
  },
  {
    "title": "l142",
    "url": "https://textpro.me/koi-fish-text-effect-online-888.html"
  },
  {
    "title": "l143",
    "url": "https://textpro.me/bread-text-effect-online-887.html"
  },
  {
    "title": "l144",
    "url": "https://textpro.me/matrix-style-text-effect-online-884.html"
  },
  {
    "title": "l145",
    "url": "https://textpro.me/horror-blood-text-effect-online-883.html"
  },
  {
    "title": "l146",
    "url": "https://textpro.me/neon-light-text-effect-online-882.html"
  },
  {
    "title": "l147",
    "url": "https://textpro.me/create-thunder-text-effect-online-881.html"
  },
  {
    "title": "l148",
    "url": "https://textpro.me/3d-box-text-effect-online-880.html"
  },
  {
    "title": "l149",
    "url": "https://textpro.me/neon-text-effect-online-879.html"
  },
  {
    "title": "l150",
    "url": "https://textpro.me/road-warning-text-effect-878.html"
  },
  {
    "title": "l151",
    "url": "https://textpro.me/3d-steel-text-effect-877.html"
  },
  {
    "title": "l152",
    "url": "https://textpro.me/bokeh-text-effect-876.html"
  },
  {
    "title": "l153",
    "url": "https://textpro.me/green-neon-text-effect-874.html"
  },
  {
    "title": "l154",
    "url": "https://textpro.me/free-advanced-glow-text-effect-873.html"
  },
  {
    "title": "l155",
    "url": "https://textpro.me/dropwater-text-effect-872.html"
  },
  {
    "title": "l156",
    "url": "https://textpro.me/break-wall-text-effect-871.html"
  },
  {
    "title": "l157",
    "url": "https://textpro.me/chrismast-gift-text-effect-869.html"
  },
  {
    "title": "l158",
    "url": "https://textpro.me/honey-text-effect-868.html"
  },
  {
    "title": "l159",
    "url": "https://textpro.me/plastic-bag-drug-text-effect-867.html"
  },
  {
    "title": "l160",
    "url": "https://textpro.me/horror-gift-text-effect-866.html"
  },
  {
    "title": "l161",
    "url": "https://textpro.me/marble-slabs-text-effect-864.html"
  },
  {
    "title": "l162",
    "url": "https://textpro.me/marble-text-effect-863.html"
  },
  {
    "title": "l163",
    "url": "https://textpro.me/ice-cold-text-effect-862.html"
  },
  {
    "title": "l164",
    "url": "https://textpro.me/fruit-juice-text-effect-861.html"
  },
  {
    "title": "l165",
    "url": "https://textpro.me/rusty-metal-text-effect-860.html"
  },
  {
    "title": "l167",
    "url": "https://textpro.me/abstra-gold-text-effect-859.html"
  },
  {
    "title": "168",
    "url": "https://textpro.me/biscuit-text-effect-858.html"
  },
  {
    "title": "l169",
    "url": "https://textpro.me/bagel-text-effect-857.html"
  },
  {
    "title": "l170",
    "url": "https://textpro.me/wood-text-effect-856.html"
  },
  {
    "title": "l171",
    "url": "https://textpro.me/sci-fi-text-effect-855.html"
  },
  {
    "title": "l172",
    "url": "https://textpro.me/metal-rainbow-text-effect-854.html"
  },
  {
    "title": "l173",
    "url": "https://textpro.me/purple-gem-text-effect-853.html"
  },
  {
    "title": "l174",
    "url": "https://textpro.me/shiny-metal-text-effect-852.html"
  },
  {
    "title": "l175",
    "url": "https://textpro.me/yellow-jewelry-text-effect-851.html"
  },
  {
    "title": "l176",
    "url": "https://textpro.me/silver-jewelry-text-effect-850.html"
  },
  {
    "title": "l177",
    "url": "https://textpro.me/red-jewelry-text-effect-849.html"
  },
  {
    "title": "l178",
    "url": "https://textpro.me/purple-jewelry-text-effect-848.html"
  },
  {
    "title": "l179",
    "url": "https://textpro.me/orange-jewelry-text-effect-847.html"
  },
  {
    "title": "l180",
    "url": "https://textpro.me/green-jewelry-text-effect-846.html"
  },
  {
    "title": "l181",
    "url": "https://textpro.me/cyan-jewelry-text-effect-845.html"
  },
  {
    "title": "l182",
    "url": "https://textpro.me/blue-jewelry-text-effect-844.html"
  },
  {
    "title": "l183",
    "url": "https://textpro.me/hot-metal-text-effect-843.html"
  },
  {
    "title": "l184",
    "url": "https://textpro.me/hexa-golden-text-effect-842.html"
  },
  {
    "title": "l185",
    "url": "https://textpro.me/blue-glitter-text-effect-841.html"
  },
  {
    "title": "l186",
    "url": "https://textpro.me/purple-glitter-text-effect-840.html"
  },
  {
    "title": "l187",
    "url": "https://textpro.me/pink-glitter-text-effect-839.html"
  },
  {
    "title": "l188",
    "url": "https://textpro.me/green-glitter-text-effect-838.html"
  },
  {
    "title": "l189",
    "url": "https://textpro.me/silver-glitter-text-effect-837.html"
  },
  {
    "title": "l190",
    "url": "https://textpro.me/gold-glitter-text-effect-836.html"
  },
  {
    "title": "l191",
    "url": "https://textpro.me/bronze-glitter-text-effect-835.html"
  },
  {
    "title": "l192",
    "url": "https://textpro.me/eroded-metal-text-effect-834.html"
  },
  {
    "title": "l193",
    "url": "https://textpro.me/carbon-text-effect-833.html"
  },
  {
    "title": "l194",
    "url": "https://textpro.me/pink-candy-text-effect-832.html"
  },
  {
    "title": "l195",
    "url": "https://textpro.me/blue-metal-text-effect-831.html"
  },
  {
    "title": "l196",
    "url": "https://textpro.me/blue-gem-text-effect-830.html"
  },
  {
    "title": "l197",
    "url": "https://textpro.me/black-metal-text-effect-829.html"
  },
  {
    "title": "l198",
    "url": "https://textpro.me/3d-glowing-metal-text-effect-828.html"
  },
  {
    "title": "l199",
    "url": "https://textpro.me/3d-chrome-text-effect-827.html"
  }
]
async function textpro(effect, ...texts) {
  texts = texts.filter(v => v)
  let eff = effects.find(v => (new RegExp(v.title, 'gi')).test(effect))
  if (!eff) return -1
  let resCookie = await fetch(eff.url, {
    headers: {
      "User-Agent": "GoogleBot",
    },
  })
  let html = await resCookie.text()
  const $$$ = cheerio.load(html)
  let textRequire = [!!$$$('#text-0').length, !!$$$('#text-1').length, !!$$$('#text-2').length].filter(v => v)
  // console.log({ textRequire, texts, textRequireLength: textRequire.length, textsLength: texts.length })
  if (textRequire.length > texts.length) return textRequire.length
  let cookieParse = (cookie, query) => cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : 'undefined'
  let hasilcookie = resCookie.headers
    .get("set-cookie")
  hasilcookie = {
    __cfduid: cookieParse(hasilcookie, '__cfduid'),
    PHPSESSID: cookieParse(hasilcookie, 'PHPSESSID')
  }
  hasilcookie = Object.entries(hasilcookie).map(([nama, value]) => nama + '=' + value).join("; ")
  const $ = cheerio.load(html)
  const token = $('input[name="token"]').attr("value")
  const form = new formData()
  for (let text of texts) form.append("text[]", text)
  form.append("submit", "Go")
  form.append("token", token)
  form.append("build_server", "https://textpro.me")
  form.append("build_server_id", 1)
  let resUrl = await fetch(eff.url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  })
  const $$ = cheerio.load(await resUrl.text())
  let token2 = JSON.parse($$('#form_value').eq(1).text())
  let encode = encodeURIComponent;
  let body = Object.keys(token2)
    .map((key) => {
      let vals = token2[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&")
  let resImgUrl = await fetch(`https://textpro.me/effect/create-image?${body}`, {
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
    }
  })
  let results = await resImgUrl.json()
  return 'https://textpro.me' + results.fullsize_image
}
