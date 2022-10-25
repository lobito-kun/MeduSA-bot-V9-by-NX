let fs = require('fs')
let handler = async (m, { text, usedPrefix }) => {
    if (!text) throw `MeduS.A-bot | *GAY*\n\nEjemplo: \n\n${usedPrefix}lesbian @usuario`
    const gay = JSON.parse(fs.readFileSync('./database/lesbian.json'));
    const random = Math.floor(Math.random() * gay.length)
    const res = gay[random]
    if (text) conn.fakeReply(m.chat, `${res.persen} Lesbiana!\n${res.pesan}`, '0@s.whatsapp.net', `MeduS.A-bot V3 - Syntax-Error`, 'status@broadcast')
}
handler.help = ['!lesbiana'].map(v => v + ' @user')
handler.tags = ['fun']
handler.command = /^(lesbian|hlesbian|lesbiana)$/i
handler.limit = false
handler.register = true
module.exports = handler
