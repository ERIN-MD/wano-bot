

let handler = async (m, { command, text }) => m.reply(`

⛩️┃Wαɳσ『 🏮』change┃⛩️*نرحب بك في مملكة ماستر🌟男*

*◉━━━── •༺ 👑 ༻• ──━━━◉*
*⌗يمنع استخدام لقب خارج نطاق الانمي*

*˼‏⥆˹ الـلـقـب ⇜【】*

*˼‏⥆˹ من أي انمي لقبك⇜【 】*

*˼‏⥆˹ مـن طـرف مين⇜ 【  】*

*˼‏⥆ ˹ ذكـر أو انـثـى ⇜【  】*

*˼‏⥆˹ صـورة للشخصـية ⇜ 【 】*

*⌗ممنوع استخدام لقب بنت وانت ولد والعكس*
*◉━━━── •༺ 👑 ༻• ──━
 `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['استماره <teks>?']
handler.tags = ['استماره', 'fun']
handler.command = /^(استماره)$/i

export default handler
