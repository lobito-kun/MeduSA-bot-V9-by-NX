let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw '▶⏸ *PLAY*\n\nQué estás buscando?'
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '▶⏸ *PLAY*\n\nVideo / audio no encontrado'
  let isVideo = /0$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nNO REINTENTES...'}`)
    }
  }
  if (yt === false) throw 'ERROR CRITICO DEL SERVIDOR! !report'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
┏━━━━❉ PLAY ❉━━━━┓
┣⊱*Título:* ${title}
┣⊱*Tamaño:* ${filesizeF}
┣⊱*Fuente:* ${vid.url}
┣━━━━━━━━━━━━
*${isLimit ? 'Puesto ': ''}Link:* ${dl_link}
`.trim(), m)
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
┏━━━━❉ PLAY ❉━━━━┓
┣⊱*Título:* ${title}
┣⊱*Tamaño:* ${filesizeF}
┣⊱*Fuente:* ${vid.url}
┣━━━━━━━━━━━━
`.trim(), m, false,  {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['play', 'play2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.limit = true

handler.exp = 0

module.exports = handler

