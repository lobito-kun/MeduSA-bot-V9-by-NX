let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.6
let handler = async (m, { conn, text }) => {
    if (!text) throw '💰 *MeduS.A-BANK® | *IMPUESTOS*\n\nIngrese la cantidad de LEAF que se pagará'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '💰 *MeduS.A-BANK® | *IMPUESTOS*\n\nTagea al bot'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '💰 *MeduS.A-BANK® | *IMPUESTOS*\n\nSolo números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 4) throw '💰 *MeduS.A-BANK® | *IMPUESTOS*\n\nError! El mínimo de leaf para transferir es 4'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'No tienes esa cantidad para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`💰 *MeduS.A-BANK® | *IMPUESTOS*\n\nTransferencia de Leaf(s) relizada exitosamente\n*Pagado:* ${-poin} Leaf(s)\n*Impuestos:* Impuesto G.A (2%) + Impuesto MeduS.A-BANK® (4%) = ${-pjk} (5%)\n*Total =* ${-limit} Leaf(s)`)
    conn.fakeReply(m.chat, `💰 *MeduS.A-BANK® | *PAGO*\n\n+${poin} Leaf`, who, m.text)
}
handler.help = ['mbot @bot <cantidad> (transfiere de tu leaf al bot)']
handler.tags = ['xp']
handler.command = /^mbot$/
handler.rowner = false
handler.register = true
module.exports = handler

