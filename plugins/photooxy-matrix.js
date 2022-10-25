const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch('https://api.zeks.xyz/api/matrix?text=' + encodeURIComponent(text) + '&apikey=apivinz')
            let img = await res.buffer()
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: 'MeduS.A-bot | *PHOTOOXY*\n\nSe ha creado correctamente la imagen, '
            })
        } catch (e) {
            throw '_En mantenimiento!_'
        }
    } else throw `MeduS.A-bot | *PHOTOOXY*\n\nEjemplo:\n${usedPrefix}matrix MeduS.A-bot `
}
handler.help = ['matrix texto']
handler.tags = ['creator']
handler.command = /^matrix$/i
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
