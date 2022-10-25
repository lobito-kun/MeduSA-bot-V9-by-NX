const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, fs.readFileSync('database/datavoice/leentro.mp3'), MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: m })
}

handler.customPrefix = /^(!leentro)$/i
handler.command = new RegExp
handler.help = ['!leentro (le entras a las de 12 como las de 50)']
handler.tags = ['voces']

handler.fail = null
handler.exp = 0
handler.limit = false
handler.register = true

module.exports = handler