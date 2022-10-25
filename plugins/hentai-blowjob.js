let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/blowjob')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['oral']
handler.tags = ['internet']
handler.command = /^(oral)$/i
handler.limit = true
handler.register = true

module.exports = handler
