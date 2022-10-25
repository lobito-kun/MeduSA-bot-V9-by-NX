let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://meme-api.herokuapp.com/gimme/hentai4everyone')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['hentai2 (otra api de hentai, por si el comando hentai repite)']
handler.tags = ['internet']
handler.command = /^(hentai2)$/i
handler.limit = true
handler.register = true

module.exports = handler
