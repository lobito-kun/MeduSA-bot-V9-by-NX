let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.1
let handler = async (m, { conn, text }) => {
    if (!text) throw '💰 *MeduS.A-BANK® | *PREMIUM*\n\nIngrese la cantidad de 180 LEAF'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '💰 *MeduS.A-BANK® | *PREMIUM*\n\nTagea al bot'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '💰 *MeduS.A-BANK® | *PREMIUM*\n\nSolo números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 179) throw '💰 *MeduS.A-BANK® | *PREMIUM*\n\nERROR! PREMIUM CUESTA 180 LEAF + 1% DE IMPUESTOS (Asegurate tener mas de 180) ('
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'No tienes esa cantidad para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`💰 *MeduS.A-BANK® | *PREMIUM*\n\nLa compra de premium fue realizada exitosamente!\n*Pagado:* ${-poin} Leaf(s)\n*Impuesto:* Impuesto MeduS.A-BANK® (1%) = ${-pjk} (5%)\n*Total =* ${-limit} Leaf(s)`)
    conn.fakeReply(m.chat, `💰 *MeduS.A-BANK® | *PAGO REALIZADO*\n\n+${poin} Leaf`, who, m.text)
}
handler.help = ['pbot @bot <cantidad> (PAGAR PREMIUM)']
handler.tags = ['xp']
handler.command = /^pbot$/
handler.rowner = false
handler.register = true
module.exports = handler

