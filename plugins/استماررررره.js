let handler = m => m; 
  
 handler.aa11 = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let hssbzhhzdbsh; 
   if (/^(استماره|5|هاي|سلام|مرحبا|هلو|اهلا)$/i.test(m.text)) { 
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
*◉━━━── •༺ 👑 ༻• ──━`  
                     
   
             

     ];
    }  
   if (hssbzhhzdbsh) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
