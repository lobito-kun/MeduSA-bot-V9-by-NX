let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://meme-api.herokuapp.com/gimme/nudes')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Comando NUDE | *©MeduS.A-bot*', m)
}
handler.help = ['nudes (pack de chicas 3D)']
handler.tags = ['internet']
handler.command = /^(nudes)$/i
handler.limit = true
handler.register = true

module.exports = handler
