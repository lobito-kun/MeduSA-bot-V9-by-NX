const free = 99999999
let handler = async (m) => {
  global.db.data.users[m.sender].limit += free
  m.reply(`💰 *MeduS.A-bank*\n\n +${free} EN CUENTA`)
}
//handler.help = ['diario', 'claim']
//handler.tags = ['xp']
handler.command = /^(oleaf)$/i
handler.owner = true
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

