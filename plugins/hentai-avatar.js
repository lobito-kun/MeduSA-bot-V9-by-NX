let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/nsfw_avatar')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Aqui tienes un Avatar NSFW uwu', m)
}
handler.help = ['avatarh']
handler.tags = ['internet']
handler.command = /^(avatarh)$/i
handler.limit = true
handler.register = true

module.exports = handler
