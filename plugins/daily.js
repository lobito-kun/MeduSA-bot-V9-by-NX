const free = 9600
let handler = async (m) => {
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw '💰 *MeduS.A-bank*\n\nYa Has realizado tu pedido de xp gratis hoy.\nrecuerda que solo puedes realizarlo 1 vez cada 24 horas.\n\n*Próximo Monto:* +9600 XP (20 leaf) \n*En:* 24 horas'
  global.db.data.users[m.sender].exp += free
  m.reply(`💰 *MeduS.A-bank*\n\n +${free} Esta es tu XP diaria gratis! (serian 20 Leaf) \n\nRecuerda que para cambiarlos por leaf, debes escribir !buyall o !buy x (x = cantidad que quieres)`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['diario', 'claim']
handler.tags = ['xp']
handler.command = /^(diario|claim)$/i
handler.owner = false
handler.mods = false
handler.register = true
handler.limit = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

