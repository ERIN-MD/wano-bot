//كود الاجابه 
//تابع لقنات
//https://whatsapp.com/channel/0029VaWuSkHGehEKy41ibw3k
import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/استخدم.*انسحب/i.test(m.quoted.text) || /.*hhint/i.test(m.text))
        return !0
    this.jsbdjdjbejssb = this.jsbdjdjbejssb ? this.jsbdjdjbejssb : {}
    if (!(id in this.jsbdjdjbejssb))
        return this.reply(m.chat, '*لقد انتهي هذا السؤال اكتب  سياره لتظهر أسأله جديده*', m)
    if (m.quoted.id == this.jsbdjdjbejssb[id][0].id) {
        let isSurrender = /^(انسحب|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.jsbdjdjbejssb[id][3])
            delete this.jsbdjdjbejssb[id]
            return this.reply(m.chat, '*طلع فاشل و استسلم :( !*', m)
        }
        let json = JSON.parse(JSON.stringify(this.jsbdjdjbejssb[id][1]))

        if (m.text.jsbdjdjbejss() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.jsbdjdjbejssb[id][2]
            this.reply(m.chat, `*❐┃اجـابـة صـحـيـحـة┃✅ ❯*\n\n*❐↞┇الـجـائـزة💰↞${this.jsbdjdjbejssb[id][2]} نقطه*`, m)
            clearTimeout(this.jsbdjdjbejssb[id][3])
            delete this.jsbdjdjbejssb[id]
        } else if (similarity(m.text.jsbdjdjbejss(), json.name.jsbdjdjbejss().trim()) >= threshold)
            m.reply(`*لقد كنت علي وشك النجاح*!`)
        else
            this.reply(m.chat, `❐┃اجـابـة خـاطـئـة┃❌ ❯`, m)
    }
    return !0
}
export const exp = 0
