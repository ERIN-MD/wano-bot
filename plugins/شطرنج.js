import { Chess } from 'chess.js';

const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.chess = conn.chess || {};
  let chessData = conn.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  conn.chess[key] = chessdata;
  const { gameData, fen, currentTurn, players, hasJoined } = chessdata;
  const feature = args[0]?.toLowerCase();

  if (feature === 'حذف') {
    delete conn.chess[key];
    return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *تم حذف اللعبه*', m);
  }

  if (feature === 'صمم') {
    if (gamedata) {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *اللعبه قائمه بالفعل*', m);
    }
    chessdata.gameData = { status: 'waiting', black: null, white: null };
    return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *تم تصميم الغرقه*\nفي انتظار اللاعبين للانضمام.', m);
  }

  if (feature === 'ادخل') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *انت لقد قمت بالانضمام بالفعل*', m);
    }
    if (!gameData || gamedata.status !== 'waiting') {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *لا يوجد لعبه شطرنج في انتظار اللاعبين حاليا*', m);
    }
    if (players.length >= 2) {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *اكتمل عدد اللاعبين بالفعل.*\nاللعبه هتبدا لوحدها', m);
    }
    players.push(sendertd);
    hasJoined.push(sendertd);
    if (players.length === 2) {
      gamedata.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gamedata.black = black;
      gamedata.white = white;
      chessdata.currentTurn = white;
      return conn.reply(m.chat, `『⛩️┃🏮WONO🏮┃⛩️』 *اللاعبين الي اضمو:*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}\n\n*الاسود:* @${black.split('@')[0]}\n*الابيض:* @${white.split('@')[0]}\n\nمن فضل استخدم *'شطرنج ابدا'* لبدا اللعبه.`, m, { mentions: hasJoined });
    } else {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』*انت لقد انضممت للعبه الشطرنج.*\nفي انتظار اللاعب الاخر', m);
    }
  }

  if (feature === 'ابدا') {
    if (gamedata.status !== 'ready') {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *مش عارف ابدا اللعبه. لازم يخش لاعبين الثنين للعب*', m);
    }
    gamedata.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessdata.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const turn = `『𝙕𝙊𝙍𝙊-𝘽𝙊𝙏』دور: *الابيض* @${gamedata.white.split('@')[0]}`;
      const flipParam = senderId === gamedata.black ? '' : '&flip=true';
      const flipParam2 = senderId === gamedata.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedfen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [gamedata.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedfen + flipParam2}.png`;
        await conn.sendFile(m.chat, boardurl2, '', turn, m, false, { mentions: [gamedata.black] });
      }
      return;
    } else {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *انت لقد انضممت الي اللعبه*\nفي انتظار اللاعب الثاني لدخول اللعبه', m);
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gamedata || gamedata.status !== 'playing') {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *اللعبه لسه مبدأتش*', m);
    }
    if (currentTurn !== senderId) {
      return conn.reply(m.chat, `『⛩️┃🏮WONO🏮┃⛩️』 *المفروض* ${chessdata.currentTurn === gamedata.white ? 'الابيض' : 'الاسود'}'هو الي يتحرك*`, m, {
        contextInfo: {
          mentionedJid: [currentturn]
        }
      });
    }
    const chess = new chess(fen);
    if (chess.isCheckmate()) {
      delete conn.chess[key];
      return conn.reply(m.chat, `『⛩️┃🏮WONO🏮┃⛩️』 *كش مات☠️*\n*اللعبه خلصت.*\n*الكسبان 🎉:* @${m.sender.split('@')[0]}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete conn.chess[key];
      return conn.reply(m.chat, `『⛩️┃🏮WONO🏮┃⛩️』 *تعادل 😑*\n*اللعبه خلصت*\n*الاعبين:* ${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return conn.reply(m.chat, '『⛩️┃🏮WONO🏮┃⛩️』 *الحركه غير صالحه*', m);
    }
    chessdata.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentturn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessdata.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gamedata.white ? 'الابيض' : 'الاسود';
    const turn = `『𝙕𝙊𝙍𝙊-𝘽𝙊𝙏』 *دور:* ${currentcolor} @${chessdata.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gamedata.black ? '' : '&flip=true';
    const flipParam2 = senderId === gamedata.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedfen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [chessdata.currentTurn] });
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [chessdata.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'مساعده') {
    return conn.reply(m.chat, `
      الشرح *مساعده اوامر لعبه الشطرنج:*

*شطرنج صمم* - عشان تعمل غرفه 
*شطرنج ادخل* - عشان تنضم للغرفه الي صممتها انت و صحبك
*شطرنج ابدا* - عشان تبدا الجيم الي انت وصحب عملتوه بعد ما دخلتو
*شطرنج حذف* - عشان تطلع من اللعبه
*شطرنج [من مكان القطعه الاولي] [الي المكان الي انت عايز تحط القطعه الثانيه]* - عشان تحرك القطع

*مثال:*
اكتب *شطرنج صمم* عشان تعمل اللعبه.
بعدها اكتب *شطرنج ادخل* عشان تخش انت وصاحبك اللعبه.
    `, m);
  }
  return conn.reply(m.chat, '『𝙕𝙊𝙍𝙊-𝘽𝙊𝙏』“ امر خاطئ. استعمل*"شطرنج مساعده"* عشان تشوف الاوامر شغاله ازاي.', m);
};

handler.help = ['chess [from to]', 'chess delete', 'chess join', 'chess start'];
handler.tags = ['game'];
handler.command = /^شطرنج$/i

export default handler
