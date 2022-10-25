const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch('https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=5cacfe53237e26dbcbe9909c&text=' + encodeURIComponent(text))
            let img = await res.buffer()
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: 'MeduS.A-BOT | *PHOTOOXY*\n\nSe ha creado correctamente la imagen'
            })
        } catch (e) {
            throw '_En mantenimiento!_'
        }
    } else throw `MeduS.A-BOT | MeduS.A-BOT\n\nEjemplo:\n${usedPrefix}shadow MeduS.A-BOT`
}
handler.help = ['shadow <texto>']
handler.tags = ['creator']
handler.command = /^(Shadow)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
// handler.maintenance = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
