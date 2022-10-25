let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/yuri')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Esto esta bien?', m)
}
handler.help = ['yuri']
handler.tags = ['internet']
handler.command = /^(yuri)$/i
handler.limit = true
handler.register = true

//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
