const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Debes poner !unreg SN (el sn te lo dimos cuando te registraste) EJEMPLO: !unreg 342347283748172747rf2 (si no sabes tu S/N escribe !report'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Debes poner !unreg SN (el sn te lo dimos cuando te registraste) EJEMPLO: !unreg 342347283748172747rf2 (si no sabes tu S/N escribe !report'
  user.registered = false
  m.reply(`Ya no estas registrado.!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

