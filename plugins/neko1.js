let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyaaa uwu', m)
}
handler.help = ['neko2']
handler.tags = ['internet']
handler.command = /^(neko2)$/i
handler.limit = true
handler.register = true
handler.premium = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
