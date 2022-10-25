let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
MeduS.A-bot | Comando: 🕐 AFK

Ahora estás ausente hasta que vuelvas a enviar un nuevo mensaje, cuando te intenten tagear el usuario será notificado de tu ausencia con el motivo.

*Usuario:* ${conn.getName(m.sender)}
*Motivo* ${text ? '*:* ' + text : ''}
`)
}
handler.help = ['afk [Motivo]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.register = true

module.exports = handler
