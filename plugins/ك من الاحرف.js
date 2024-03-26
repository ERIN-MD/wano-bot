//
// By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  const fakemek = {'key': {'participant': '0@s.whatsapp.net', 'remoteJid': '0@s.whatsapp.net'}, 'message': {'groupInviteMessage': {'groupJid': '51995386439-1616969743@g.us', 'inviteCode': 'm', 'groupName': 'P', 'caption': '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null}}};
  if (chat.antiTraba && m.text.length > 5000) { // Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, {text: `مسؤول @${m.sender.split('@')[0]} قد أرسلت للتو رسالة نصية تحتوي على العديد من الأحرف -.-!`, mentions: [m.sender]}, {quoted: fakemek});
    conn.sendMessage(m.chat, `*[ ! ] تم اكتشاف رسالة تحتوي على العديد من الأحرف [ ! ]*\n`, `${isBotAdmin ? '' : 'أنا لست مسؤولا، لا أستطيع أن أفعل أي شيء :/'}`, m);
    // await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ DESACTIVAR ANTI TRABAS ]', usedPrefix+'apagar antitraba'], fakemek )
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
        	setTimeout(() => {
        	conn.sendMessage(m.chat, {text: `وضع علامة على الدردشة كمقروءة ✓\n${'\n'.repeat(400)}\n=> الرقم : wa.me/${m.sender.split('@')[0]}\n=> الاسم  : ${name}\n[ ! ] لقد قمت للتو بإرسال رسالة نصية تحتوي على العديد من الأحرف التي قد تتسبب في فشل الجهاز`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('[ ! ] لتنفيذ إجراءات الإزالة، يجب على المالك تشغيل الوضع المقيد!');
  }
  return !0;
}
