let handler = async (m, { conn, command, text }) => {`
⛩️│الـتـنزيـل│⛩️

*🏮 │انستغرام*
*🏮 │انستا*
*🏮 │شغل*
*🏮 │تيكتوك*
*🏮 │تويتر*
*🏮 │اغنية*
*🏮 │بحث*
*🏮 │فيديو*
*🏮 │تطبيق*
*🏮 │صوره*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(التنزيلات)$/i
export default handler
