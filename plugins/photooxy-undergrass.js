const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch('https://api.lolhuman.xyz/api/photooxy1/undergrass?apikey=fe763787075762a999e4c50d&text=' + encodeURIComponent(text))
            let img = await res.buffer()
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: 'MeduS.A-BOT | *PHOTOOXY*\n\nSe ha creado correctamente la imagen, no olvides suscribirte al canal de youtube del creador del bot \nhttps://www.youtube.com/c/TheKillerMaxOFC'
            })
        } catch (e) {
            throw '_En mantenimiento!_'
        }
    } else throw `MeduS.A-BOT | *PHOTOOXY*\n\nEjemplo:\n${usedPrefix}ug MeduS.A-BOT`
}
handler.help = ['ug <texto>']
handler.tags = ['creator']
handler.command = /^(ug)$/i
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
