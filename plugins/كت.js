let handler = async (m, { conn, text}) => {
m.reply(`"${pickRandom(global.ct)}"`)
}
handler.tags = ['ct']
handler.command = ['كت','كت']
 export default handler
    
 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]}
    
 global.ct = [
  "نسبه الندم عندك للي وثقت فيهم ؟ ",
  "اول حرف من اسم شخص تقوله? بطل تفكر فيني ابي انام؟ ",
  "اكثر شيء تحس انه مات ف مجتمعنا؟ ",
  "لو صار سوء فهم بينك وبين شخص هل تحب توضحه ولا تخليه كذا  لان مالك خلق توضح ؟ ",
  "كم عددكم بالبيت؟ ",
  "عادي تتزوج من برا القبيلة؟ ",
  "أجمل شي بحياتك وش هو؟ ", 
 
]
