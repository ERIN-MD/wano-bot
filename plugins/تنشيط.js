//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	

  let isEnable = /true|تشغيل|(turn)?تشغيل|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'الترحيب':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'تحدث':
     case 'autotalk':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
           throw false
          }}
      chat.jarvis = isEnable
     break
	case 'pmblocker':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.pmblocker = isEnable
break	  
case 'البايو':
  isAll = true
  if (!isROwner) {
  global.dfail('rowner', m, conn)
  throw false
  }
  bot.autoBio = isEnable
  break	 
      case 'الاشعارات':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
      case 'اوتواستيكر':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autosticker = isEnable
      break
      case 'مضاد-سبام':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSpam = isEnable
      break
    case 'مضاد-الحذف':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
      case 'مضاد-العلوق':
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'اوتوستيت':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      chat.viewStory = isEnable
      break

    case 'مضاد-لينكات':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'اوتولفل':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'شات':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.chatbot = isEnable
      break
     
    case 'القيود':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
      case 'اوتوسين':
    case 'alwaysonline':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.autotype = isEnable
      break
      
      case 'مضاد-المكالمات':
        case 'nocall':
          isAll = true
          if (!isOwner) {
            global.dfail('owner', m, conn)
            throw false
          }
          bot.antiCall = isEnable
          break
    case 'للخاص':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'للجروب':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
     if (!/[01]/.test(command)) return m.reply(`
≡ List of options

◈──『 *الادمن*』───⳹
⛊ الترحيب
⛊ مضاد-لينكات
⛊ اوتواستيكر
⛊ الاشعارات
⛊ البايو
⛊ مضاد-سبام
⛊ مضاد-العلوق
╰──────────⳹ 
◈──『 *المستخدمين*』───⳹
⛊ اوتولفل
⛊ شات 
╰──────────⳹
◈──『 *المالك*』───⳹
⛊ للخاص
⛊ للجروب
⛊ اوتوسين
⛊ القيود
╰──────────⳹
*📌 مثال :*
*${usedPrefix}تشغيل* الترحيب
*${usedPrefix}تعطيل* الترحيب
`)
      throw false
  }

m.reply(`
✅ *${type}* الان *${isEnable ? 'نشط' : 'Deactive'}* ${isAll ? 'لهذا البوت' : isUser ? '' : 'لهذا البوت'}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['config']
handler.command = /^((en|dis)able|(turn)?ت(n|عطيل)|[01])$/i

export default handler
