let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(who.split`@`[0])) throw '👑 *PREMIUM*\n\nTagea al que recibirá premium'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `MeduS.A-bot | 👑 *PREMIUM*\n\n*Usuario:* Agregado ✅\n*Número:* wa.me/${who.split("@s.whatsapp.net")[0]}\n*Expira:* PROX REINICIO DEL BOT\n\n_*Si sobrecarga al bot, se de dara ban.*_`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.command = /^darpremium$/i
handler.rowner = true
module.exports = handler
