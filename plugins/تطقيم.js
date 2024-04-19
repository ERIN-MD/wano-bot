import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/kdjrjidj/58200892612d853c879660227d600445/raw/fb9be0a9994dff6edb6fa5490e34023b954dbada/xxxxha.js')).json()
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
