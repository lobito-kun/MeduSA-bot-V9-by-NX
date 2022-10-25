var fs = require('fs');

let handler = async (m, { conn }) => {
    const botjson = JSON.parse(fs.readFileSync('./database/bot.json'));
    const random = Math.floor(Math.random() * botjson.length)
    const res = botjson[random]
    await conn.sendFile(m.chat, res.image, 'bot.jpg', '', m)
}
handler.help = ['pack']
handler.tags = ['random']
handler.command = /^pack$/i
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
