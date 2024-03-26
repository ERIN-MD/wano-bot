import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/YosefZoro1/5d7e0acf4d8ebec05091a6cf465dde93/raw/347d3051239550fee064ad9097aacd26838885a4/boys.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*ولد*🧑\⛩️┃🏮WONO🏮┃⛩️', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*ولد*🧑🏻\n⛩️┃🏮WONO🏮┃⛩️', m)
}
handler.help = ['Miku bot']
handler.tags = ['Miku bot']
handler.command = /^تطقيم اولاد|طقم-اولاد$/i
handler.limit = true

export default handler
