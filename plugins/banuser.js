let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'A quien quieres banear?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag al que quieras banear'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `MeduS.A-bot | *BANEO*\n\nEl usuario fue baneado con exito! No podra utilizar el bot hasta nuevo aviso. (en caso de error, pidele a un amigo que escriba !ayudareport y sigue instrucciones...)`, m)
}
handler.help = ['ban @user (banea a un usuario, despues de este comando escribe !report y la razon del baneo)']
handler.tags = ['programador y mods']
handler.command = /^ban$/i
handler.mods = true
//handler.rowner = true

module.exports = handler
