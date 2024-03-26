global.math = global.math ? global.math : {};
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const mat =`
*[❗ خطأ ❗] تستخدم الأمر بطريقة غير صحيحة*

*يحب ان تختار مستوي: ${Object.keys(modes).join(' | ')}*
*مثل: ${usedPrefix} .حساب سهل*
`.trim();
  if (args.length < 1) return await conn.reply(m.chat, mat, m);
  /* conn.sendButton(m.chat, mat, wm, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`],
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`],
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)

conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`],
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`],
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)*/

  const mode = args[0].toLowerCase();
  if (!(mode in modes)) return await conn.reply(m.chat, mat, m);

  /* conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`],
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`],
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)*/

  const id = m.chat;
  if (id in global.math) return conn.reply(m.chat, '*🕝انتهت🕝 𝚃𝙾𝙳𝙰𝚅𝙸𝙰 𝙷𝙰𝚈 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰𝚂 𝚂𝙸𝙽 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃!*', global.math[id][0]);
  const math = genMath(mode);
  global.math[id] = [
    await conn.reply(m.chat, `𝙲 احسب المعادله *${math.str}*?\n\n*⏳ الوقت: ${(math.time / 1000).toFixed(2)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*\n*🏆 الجائزه: ${math.bonus} 𝚇𝙿*`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) {
        conn.reply(m.chat, `*[🕝انتهت🕝] انتهي وقت المعادله العب مره اخري*\n\n*الاجـابـه الـصحـيحه ${math.result}*`, m),
        // conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙰𝙷 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙰𝚁𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁*\n\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂 ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
        delete global.math[id];
      }
    }, math.time),
  ];
};
handler.help = ['math <mode>'];
handler.tags = ['game'];
handler.command = /^math|mates|رياضيات/i;
export default handler;

const modes = {
  نوب: [-3, 3, -3, 3, '+-', 15000, 10],
  سهل: [-10, 10, -10, 10, '*/+-', 20000, 40],
  متوسط: [-40, 40, -20, 20, '*/+-', 40000, 150],
  صعب: [-100, 100, -70, 70, '*/+-', 60000, 350],
  قوي: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  مستحيل: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  مستحيل2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
};

const operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
};

function genMath(mode) {
  const [a1, a2, b1, b2, ops, time, bonus] = modes[mode];
  let a = randomInt(a1, a2);
  const b = randomInt(b1, b2);
  const op = pickRandom([...ops]);
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))();
  if (op == '/') [a, result] = [result, a];
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
  };
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  from = Math.floor(from);
  to = Math.floor(to);
  return Math.floor((to - from) * Math.random() + from);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
