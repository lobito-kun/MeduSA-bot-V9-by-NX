let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.35
let handler = async (m, { conn, text }) => {
    if (!text) throw '💰 *MeduS.A-bank*\n\nIngrese la cantidad de LEAF que se dará'
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
    if (limit < 4) throw '💰 *MeduS.A-bank*\n\nError! El mínimo de leaf para transferir es 4'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'No tienes esa cantidad para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`💰 *MeduS.A-bank*\n\nTransferencia de Leaf(s) relizada exitosamente\n*Pagado:* ${-poin} Leaf(s)\n*Impuestos:* Impuesto G.A (10%) + Impuesto MeduS.A-bank (10%) + Impuesto LEAF (15%) = ${-pjk} (35%)\n*Total =* ${-limit} Leaf(s)`)
    conn.fakeReply(m.chat, `💰 *MeduS.A-bank*\n\n+${poin} Leaf`, who, m.text)
}
handler.help = ['payleaf @user <cantidad> (transfiere de tu leaf a otros)']
handler.tags = ['xp']
handler.command = /^payleaf$/
handler.rowner = false
handler.register = true
module.exports = handler

