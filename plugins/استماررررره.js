let handler = m => m; 
  
 handler.aa11 = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let hssbzhhzdbsh; 
   if (/^5$/i.test(m.text)) { 
     hssbzhhzdbsh = [ 
                    `*نرحب بك في مملكة ماستر🌟男*

*◉━━━── •༺ 👑 ༻• ──━━━◉*
*⌗يمنع استخدام لقب خارج نطاق الانمي*

*˼‏⥆˹ الـلـقـب ⇜【】*

*˼‏⥆˹ من أي انمي لقبك⇜【 】*

*˼‏⥆˹ مـن طـرف مين⇜ 【  】*

*˼‏⥆ ˹ ذكـر أو انـثـى ⇜【  】*

*˼‏⥆˹ صـورة للشخصـية ⇜ 【 】*

*⌗ممنوع استخدام لقب بنت وانت ولد والعكس*
*◉━━━── •༺ 👑 ༻• ──━`,    
                     
`*نرحب بك في مملكة ماستر🌟男*

*◉━━━── •༺ 👑 ༻• ──━━━◉*
*⌗يمنع استخدام لقب خارج نطاق الانمي*

*˼‏⥆˹ الـلـقـب ⇜【】*

*˼‏⥆˹ من أي انمي لقبك⇜【 】*

*˼‏⥆˹ مـن طـرف مين⇜ 【  】*

*˼‏⥆ ˹ ذكـر أو انـثـى ⇜【  】*

*˼‏⥆˹ صـورة للشخصـية ⇜ 【 】*

*⌗ممنوع استخدام لقب بنت وانت ولد والعكس*
*◉━━━── •༺ 👑 ༻• ──━`   
             

     ];
    }  
   if (hssbzhhzdbsh) { 
     let randomIndex = Math.floor(Math.random() * hssbzhhzdbsh.length); 
     conn.reply(m.chat, hssbzhhzdbsh[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
