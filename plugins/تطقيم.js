import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/kdjrjidj/e88a711fd14983046776ca9f507d9655/raw/c1d4ee728f7c3d843675a895e1d28ad3545443d8/jdbrijtfjcj.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.sjdbs)).buffer()
  await conn.sendFile(m.chat, cowi, '⛩️┃🏮𝑊𝐴𝑁𝛩🏮┃⛩️', '👤', m)
  let ciwi = await(await fetch(cita.hsvqwiw)).buffer()
  await conn.sendFile(m.chat, ciwi, '⛩️┃🏮𝑊𝐴𝑁𝛩🏮┃⛩️', '👤', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet']
handler.command = ['طقم','تطقيم'] 


export default handler
