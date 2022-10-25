let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
⤴ *LEVELUP*

Level *${user.level} (${user.exp - min}/${xp})*
Necesitas *${max - user.exp}* nuevamente!
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) m.reply(`
⤴ *LEVELUP*

¡Felicitaciones, has subido de nivel!
*${user.level - 1}* ↣ *${user.level}*
	`.trim())
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler