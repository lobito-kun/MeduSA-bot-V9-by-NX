const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch('https://api.xteam.xyz/quotemaker?text=' + encodeURIComponent(text) + '&wm=MeduS.A-BOT&APIKEY=astrobotapi')
            let img = await res.buffer()
            // if (!img) throw img
            // let stiker = await sticker(img)
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: 'MeduS.A-BOT | *PHOTOOXY*\n\nSe ha creado correctamente el texto. No olvides Tener premium! tendras muchas mas cosas... !premium'
            })
        } catch (e) {
            console.log(e)
            throw '_En mantenimiento!_'
        }
    } else throw `MeduS.A-BOT | *PHOTOOXY*\n\nEjemplo:\n${usedPrefix}quotemaker MeduS.A-BOT`
}
handler.help = ['quotemaker']
handler.tags = ['creator']
handler.command = /^quotemaker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.maintenance = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
