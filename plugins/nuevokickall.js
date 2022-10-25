let handler = async (m, { conn, text, participants }) => {

let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.jid).filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
for (let u of users) if (u.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [u])
// Bot & Group Owner Will Not Be Kicked 😉
}
handler.help = ['kickall']
handler.tags = ['group']
handler.command = /^(p199855)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true
// XD
module.exports = handler