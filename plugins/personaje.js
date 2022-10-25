let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `ESPERAAA`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `MeduS.A-bot | *Per-Info
💬 *NOMBRE:* ${name}
💭 *Nombre alternativo:* ${alternative_names}
🔗 *Link*: ${url}
👤 *Tipo de personaje*: ${type}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['personaje <nombre> (busca un personaje anime)']
handler.tags = ['internet']
handler.command = /^(personaje)$/i
//comando editado por arrris
module.exports = handler