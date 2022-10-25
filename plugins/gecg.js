let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/gecg')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
//handler.help = ['trap (trapitos)']
//handler.tags = ['internet']
handler.command = /^(test800)$/i
handler.limit = true
handler.register = true

module.exports = handler
