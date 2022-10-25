let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let user = global.db.data.users[m.sender]
	if (!user.autolevelup) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) m.reply(`
⤴ *MeduS.A-bot | LEVELUP*

Felicitaciones, has subido de nivel!
*${before}* ↣ *${user.level}*
usa *.profile* para revisar
	`.trim())
}

module.exports = handler
