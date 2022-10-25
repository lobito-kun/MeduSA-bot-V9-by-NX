let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://meme-api.herokuapp.com/gimme/animearmpits')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['axilas (de verdad pides esto? XD)']
handler.tags = ['internet']
handler.command = /^(axilas)$/i
handler.limit = true
handler.register = true

module.exports = handler
