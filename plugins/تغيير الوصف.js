let handler = async (m, { conn, args }) => {
    await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
    m.reply('*✅ تم تعديل الوصف بنجاح*')
    }
    handler.help = ['Setdesc <text>']
    handler.tags = ['group']
    handler.command = /^تغيرالوصف|تغير-الوصف$/i
    handler.group = true
    handler.admin = true
    handler.botAdmin = true
    export default handler
