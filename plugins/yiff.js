let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://yiff.rest/V2/furry/yiff/gay')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Esto esta bien?', m)
}
handler.help = ['yiff']
handler.tags = ['internet']
handler.command = /^(yiff)$/i
handler.limit = false
handler.register = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
