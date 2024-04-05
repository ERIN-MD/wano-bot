import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/kdjrjidj/9d3ab3158d5c42934102969a6a854df4/raw/4fe0cb9c04d00d9b630b0e7a47b82cee46e90db0/xjsjjdjdjsd.jsonn')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.sjdbs)).buffer()
  await conn.sendFile(m.chat, cowi, '⛩️┃🏮𝑊𝐴𝑁𝛩🏮┃⛩️', '👤', m)
  let ciwi = await(await fetch(cita.hsvqwiw)).buffer()
  await conn.sendFile(m.chat, ciwi, '⛩️┃🏮𝑊𝐴𝑁𝛩🏮┃⛩️', '👤', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet']
handler.command = ['تطقيم-اولاد','طقم-اولاد'] 


export default handler
