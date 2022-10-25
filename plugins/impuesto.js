let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.00
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Pon la cantidad que le quieres dar'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag a el usuario!'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'SOLO NUMEROS'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'No tienes la cantidad de xp impuesto para transferir'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['impuesto @user <amount> (comando de impuesto']
handler.tags = ['meduS.A economia']
handler.command = /^impuesto$/
handler.rowner = true
handler.register = true

module.exports = handler

