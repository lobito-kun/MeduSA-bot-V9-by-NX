let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.15
let handler = async (m, { conn, text }) => {
  if (!text) throw '`💰 *MeduS.A-bank*\n\nIngrese la cantidad de exp que se dará'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '💰 *MeduS.A-bank*\n\nTagea el que lo recibirá'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw '💰 *MeduS.A-bank*\n\nSolo números'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 30) throw '💰 *MeduS.A-bank*\n\nError! El mínimo de XP para transferir es 30 xp'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'No tienes la cantidad de xp para transferir'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`💰 *MeduS.A-bank*\n\nTransferencia de XP relizada exitosamente\n*Pagado:* ${-xp} XP\n*Impuestos:* Impuesto G.A (10%) + Impuesto MeduS.A-bank (5%) = ${-pjk} (15%) \n*Total =* ${-exp} XP`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay @user <amount> (transfiere parte de tu XP a un jugador']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = false
handler.register = true

module.exports = handler

