const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler = async(m, { conn, text, participants, isMods }) => {
let who
  if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  else who = m.chat
  if (!who) throw 'MeduS.A-bot |🛠 *STAFF*\n\nTagea el que lo recibirá!'
  if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
  let user = `${who.split("@s.whatsapp.net")[0]}`
  let up = global.mods.push(user)
    m.reply(`MeduS.A-bot |🛠 *STAFF*\n\n*Usuario:* Agregado ✅\n*Número:* wa.me/${who.split("@s.whatsapp.net")[0]}\n*Expira:* Prox reinicio\n\n_*Gracias por agregar un STAFF! (recuerda que eres el resonsable al 100% de el)*_`)
   } else m.reply('MeduS.A-bot |🛠 *STAFF*\n\nAquí hay un número de host (consulta a creador por este error)...')
  }
handler.help = ['darstaff <@user>']
handler.tags = ['staff']
handler.command = /^darstaff$/i
handler.smod = true
handler.register = true

module.exports = handler
