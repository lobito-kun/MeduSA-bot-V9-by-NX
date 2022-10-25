let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`${toM(a)} y ${toM(b)} Son pareja en secreto! sshh`, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['pareja']
handler.tags = ['main']
handler.command = ['pareja']
handler.group = true
handler.limit = false

module.exports = handler