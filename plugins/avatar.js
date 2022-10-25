let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/avatar')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['avatar (Quiza alguna te guste para foto de perfil)']
handler.tags = ['internet']
handler.command = /^(avatar)$/i
handler.limit = true
handler.register = true

module.exports = handler
