const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      m.reply(`MeduS.A-bot | *STICKER*\n\nESPERA...`)
      if (!img) throw `MeduS.A-bot | *STICKER*\n\nRESPONDE A LA IMAGEN USANDO: *${usedPrefix + command}*`
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('MeduS.A-bot | *STICKER*\n\nMAXIMO 10 SEGUNDOS!')
      let img = await q.download()
      m.reply(`MeduS.A-bot | *STICKER*\n\nESPERA...`)
      if (!img) throw `MeduS.A-bot | *STICKER*\n\nRESPONDE AL VIDEO/GIFF USANDO: *${usedPrefix + command}*`
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (/webp/.test(mime)) {
      let img = await q.download()
      m.reply(`MeduS.A-bot | *STICKER*\n\nESPERA...`)
      if (!img) throw `MeduS.A-bot | *STICKER*\n\nRESPONDE AL STICKER USANDO: *${usedPrefix + command}*`
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('MeduS.A-bot | *STICKER*\n\nURL INVALIDA!!')
    }
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'MeduS.A-bot | *STICKER*\n\nERROR! ASEGURATE QUE HICISTE TODO BIEN. Si es un error del bot, ESCRIBRE !report aqui el mensaje'
  }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
module.exports = handler
const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}