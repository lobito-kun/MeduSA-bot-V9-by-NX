let fs = require('fs')
let handler = async (m, { text, usedPrefix }) => {
    if (!text) throw `MeduS.A-bot | *GAY*\n\nEjemplo: \n\n${usedPrefix}gay @usuario`
    const gay = JSON.parse(fs.readFileSync('./database/gay.json'));
    const random = Math.floor(Math.random() * gay.length)
    const res = gay[random]
    if (text) conn.fakeReply(m.chat, `${res.persen} Gay!\n${res.pesan}`)
}
handler.help = ['!gay'].map(v => v + ' @user')
handler.tags = ['fun']
handler.command = /^(gay|maricon)$/i
handler.limit = false
handler.register = true
module.exports = handler
