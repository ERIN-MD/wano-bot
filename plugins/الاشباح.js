const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*[💕] هذه المجموعه نشيطه وليس بها اشباح`, m);
  m.reply(`*[ ⚠ مراجعه غير نشط ⚠ ]*\n\n*الحروب:* ${await conn.getName(m.chat)}\n*اعضاء المجموعه :* ${sum}\n\n*[ 👻 قائمه الاشباح 👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملحوظة : مش شرط ان البوت يكون صح 100% غير انه بيعد الرسائل و هو شغال او وقت ما دخل الجروب + الاشباح مقصود بيهم الي مش بيتفاعلو خالص*`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|fantasmas|الاشباح)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
