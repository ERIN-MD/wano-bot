let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*✯≼══━━﹂🏮﹁━━══≽✯*

*زوجتك ↓↓↓*

*《🌷${toM(a)}🌷》*

*✯≼══━━﹂🏮﹁━━══≽✯*`, null, {
mentions: [a, b]
})}
handler.help = ['shb']
handler.tags = ['main', 'fun']
handler.command = ['زوجني']
handler.group = true
export default handler
