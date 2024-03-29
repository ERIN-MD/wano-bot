let handler = async (m, { conn, text }) => {
  if (!text) throw `*من فضلك ارســـل لــي بــيــو جــديــد*`
    try {
   await conn.updateProfileStatus(text).catch(_ => _)
   conn.reply(m.chat, '*تــم تــغــيــر الــبــيــو بــنــجــاح☑️*', m)
} catch {
      throw '*خــطــاء فــي تــغــيــر الــبــيــو✖️*'
    }
}
handler.help = ['setbio']
handler.tags = ['owner']
handler.command = /^(تغيرالبيو)$/i
handler.owner = true

export default handler
