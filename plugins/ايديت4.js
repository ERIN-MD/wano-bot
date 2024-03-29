import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://gist.githubusercontent.com/YosefZoro1/41e80f742a04cbac0b82c838a2f9570d/raw/2d76480d96fc9c90254ae431f2ce005947f9afbb/edit.json`).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*⛩️┃🏮WONO🏮┃⛩️`, m)}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(ايديت4)$/i
export default handler
