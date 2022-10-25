let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://meme-api.herokuapp.com/gimme/animethighss')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['muslos']
handler.tags = ['internet']
handler.command = /^(muslos)$/i
handler.limit = true
handler.register = true

module.exports = handler
