const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Etiqueta un sticker!'
    let img = await m.quoted.download()
    stiker = await sticker(img, false, packname || global.packname, author || global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'No se puede robar este sticker.'
  }
}
handler.help = ['robar <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar$/i
handler.register = true

module.exports = handler