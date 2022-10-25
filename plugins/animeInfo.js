let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `MeduS.A-bot | *AnimeInfo*\n\n ESPERA ESTOY SOBRECARGADA!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `MeduS.A-bot | *Anime-Info*
✨️ *Titulo:* ${title}
🎆️ *Episodios:* ${episodes}
➡️ *Inicio de transmision:* ${start_date}
🔚 *Final de transmision:* ${end_date}
💬 *Tipo de show:* ${type}
💌️ *Rating:* ${rated}
❤️ *puntaje:* ${score}
👥 *Miembros:* ${members}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['animeinfo <titulo>']
handler.tags = ['internet']
//handler.command = /^(test345)$/i
handler.command = /^(animeinfo)$/i
//ARRIS SCRIPT max gay
module.exports = handler