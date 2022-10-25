let handler = async (m, { conn, args }) => {
  //let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  let chat = global.db.data.chats[m.chat]
  this.groupRemove(m.chat, [m.sender])
  conn.reply(m.chat,`MeduS.A-bot | *TEST332*\n\n _🎉 MENSAJE SI FALLA O ES UN EXITO_.`, m)
}
//handler.help = ['kick', '-'].map(v => v + ' @user')
//handler.tags = ['admin']
handler.command = /^(test332)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler

