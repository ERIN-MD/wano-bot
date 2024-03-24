import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/YosefZoro1/a6448e075f4ec9b7efc9d5ee4551d580/raw/78c011a3f719f558d2eadf5751624b787dbbc197/girls.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*بنت*👧🏻\n𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*بنت*👧\n𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇', m)
}
handler.help = ['Miku bot']
handler.tags = ['Miku bot']
handler.command = /^طقم-بنات|طقم1$/i
handler.limit = true

export default handler
