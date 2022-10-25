let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Esto esta bien?', m)
}
handler.help = ['hentaihd']
handler.tags = ['internet']
handler.command = /^(hentaihd)$/i
handler.limit = true
handler.premium = true
handler.register = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
