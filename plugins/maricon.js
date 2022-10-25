let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`Aqui el mas maricon del grupo: ${toM(a)} `, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['maricon']
handler.tags = ['main']
handler.command = ['!maricon']
handler.group = true
handler.limit = true

module.exports = handler