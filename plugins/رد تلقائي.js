//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*ارحب*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^كاتاكوري |كاتاكوري$/i.test(m.text)) { 
     responses = [ 
'*مازا تريد؟ *'
     ]; 
 }else if (/^شحالك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*كما كنت*'
     ]; 
   }else if (/^ون بيس عمك$/i.test(m.text)) { 
     responses = [ 
'*عم الجميع*'
   ]; 
   }else if (/^بوت $/i.test(m.text)) { 
     responses = [ 
'*نعم؟  🐦*',
'*مازا تريد؟*',
'*م فاضي 🔚*',
]; 
   }else if (/^تكرهني|تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*نعم*',
'*تقريبا*',
'*اذا م تتفاعل نعم *',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
'استرجل وقول السلام عليكم',  


     ]; 
}else if (/^متى تنام/i.test(m.text)) { 
     responses = [ 
       '*م ادري*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
' حرة'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*حاول تسترجل*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'لاشيء',
      'اراقب الي م يتفاعلو' , 

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'لا',  

     ];
     }else if (/^وينه البوت$/i.test(m.text)) { 
     responses = [ 
       'ها وش فيك معي؟',  

     ];
     }else if (/^بوت|بوت$/i.test(m.text)) { 
     responses = [ 
       '*ها وش فيك معي*',  
      `اهلا؟`,  
      `انا هنا`'

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*.*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^Nezuko$/i.test(m.text)) { 
     responses = [ 
       '*تانجيرو☹️*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
