let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'A quien quieres banear?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag al que quieres banear'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `MeduS.A-bot | *BANEO*\n\nEl usuario fue desbaneado! Espero que no viole mas TNC...`, m)
}
handler.help = ['unban @user (desbanea al usuario)']
handler.tags = ['programador y mods']
handler.command = /^unban$/i
handler.mods = true
//handler.rowner = true

module.exports = handler
