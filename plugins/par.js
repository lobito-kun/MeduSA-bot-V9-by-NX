//Dame creditos maxxxxxxxx
let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
	let user = global.db.data.users[m.sender]
	let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    m.reply(`_❤️ Pareja! ${conn.getName(m.sender)}, TU y ${toM(a)} Sois almas gemelas!_ `, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['!par  (te dice quien en el grupo es tu alma gelema)']
handler.tags = ['main']
handler.command = ['par']
handler.group = true
handler.limit = false
handler.register = true

module.exports = handler