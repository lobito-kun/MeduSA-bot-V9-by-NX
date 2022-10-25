// Maricon unu
var fs = require('fs');

let handler = async (m, { conn }) => {
    const botjson = JSON.parse(fs.readFileSync('./database/lim.json'));
    const random = Math.floor(Math.random() * botjson.length)
    const res = botjson[random]
    await conn.sendFile(m.chat, res.image, 'lim.jpg', '', m)
}
handler.help = ['test900 (ERRRRRR...?)']
handler.tags = ['random']
handler.command = /^test900$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
