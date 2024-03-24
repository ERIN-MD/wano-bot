import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/YosefZoro1/401e391da204c750b1790e9f8a0d0d68/raw/8409beec1919004fad4cb73da4703cb6614a5257/copulss.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let man = await(await fetch(cita.male)).buffer()
  await conn.sendFile(m.chat, man, '', '🤵🏻ولد\n𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇', m)
  let girl = await(await fetch(cita.female)).buffer()
  await conn.sendFile(m.chat, girl, '', '👰🏻‍♀️بنت\n𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['t2m']
handler.command = ['طقم','تطقيم'] 


export default handler
