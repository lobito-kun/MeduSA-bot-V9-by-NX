const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch('https://api.zeks.xyz/api/wolflogo?&apikey=apivinz&text1=MeduS.A-bot&text2=' + encodeURIComponent(text))
            let img = await res.buffer()
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: 'MeduS.A-bot | *PHOTOOXY*\n\nSe ha creado correctamente la imagen.'
            })
        } catch (e) {
            throw '_En mantenimiento!_'
        }
    } else throw `MeduS.A-bot  | *PHOTOOXY*\n\nEjemplo:\n${usedPrefix}wl MeduS.A`
}
handler.help = ['wl texto (crea un logo de lobo)']
handler.tags = ['creator']
handler.command = /^wl$/i
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
