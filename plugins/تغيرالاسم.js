let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*ارسل لي اسم جديدا*`
  try {
    await conn.updateProfileName(text)
    m.reply('*تــم تــغــيــر اســم الــبــوت بـــنجــاح☑️*')
  } catch (e) {
    console.log(e)
    throw `*خطاء في تغير الاسم✖️*`
  }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(تغيرالاسم)$/i

handler.owner = true

export default handler
