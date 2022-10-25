const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, fs.readFileSync('database/datavoice/voice3.mp3'), MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: m })
}

handler.customPrefix = /^(bot quiero chupartela|bot puedo chupartela|bot te la chupo|bot te la chupo?|puedo chupartela?|puedo chupartela|te la chupo|!returbio|te la chupo?)$/i
handler.command = new RegExp
handler.help = ['returbio (aaaaaa )']
handler.tags = ['voces']

handler.fail = null
handler.exp = 0
handler.limit = false
handler.register = true

module.exports = handler
