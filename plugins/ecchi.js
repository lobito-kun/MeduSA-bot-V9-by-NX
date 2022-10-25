let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://meme-api.herokuapp.com/gimme/ecchi')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['ecchi']
handler.tags = ['internet']
handler.command = /^(ecchi)$/i
handler.limit = true
handler.register = true

module.exports = handler
