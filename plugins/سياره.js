//كود لعبة السيارات
//تابع لقنات
//https://whatsapp.com/channel/0029VaWuSkHGehEKy41ibw3k
let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.jsbdjdjbejssb = conn.jsbdjdjbejssb ? conn.jsbdjdjbejssb : {}
    let id = m.chat
    if (id in conn.jsbdjdjbejssb) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.jsbdjdjbejssb[id][0])
        throw false
    }
    let src = await (await fetch('https://gist.githubusercontent.com/ggbot564/de6999400bb50eecd7b5f65f67f66786/raw/dd9a5a3cf73fc6bd67c04b3f1a88eea0f049f1db/cars')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.jsbdjdjbejssb()}*
  ❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
 استخدم .انسحب للأنسحاب
  ❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
『⛩️┃𝑊𝛩𝑁𝛩『 🏮 』𝐵𝛩𝑇┃⛩️』
     `.trim()
    conn.jsbdjdjbejssb[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.jsbdjdjbejssb[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.name}*┇`, conn.jsbdjdjbejssb[id][0])
            delete conn.jsbdjdjbejssb[id]
        }, timeout)
    ]
}
handler.help = ['سيارات']
handler.tags = ['new']
handler.command = /^سيارات/i

export default handler
