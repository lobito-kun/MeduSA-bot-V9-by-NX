let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.0
let handler = async (m, { conn, text }) => {
    if (!text) throw '💰 *MeduS.A-bank*\n\nIngrese la cantidad de Leaf que se dará'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '💰 *MeduS.A-bank*\n\nTagea el que lo recibirá'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '💰 *MeduS.A-bank*\n\nSolo números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw '💰 *MeduS.A-bank*\n\nError! El mínimo de leaf para transferir es 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'No tienes esa cantidad para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`💰 *MeduS.A-bank*\n\nTransferencia de Leaf(s) relizada exitosamente\n*Pagado:* ${-poin} Leaf(s)\n*Total =* ${-limit} Leaf(s)`)
    conn.fakeReply(m.chat, `💰 *MeduS.A-bank*\n\n+${poin} Leaf (comando solo ejecutable por el bot, Para dar leaf a otros jugadores, escribe !ayudaleaf `, who, m.text)
}
handler.help = ['Regalarleaf']
handler.tags = ['xp']
handler.command = /^regalarleaf$/
handler.rowner = true
handler.register = true
module.exports = handler

