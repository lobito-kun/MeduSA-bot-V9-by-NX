let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
	  
  conn.reply(m.chat,`MeduS.A-bot | *PROMOTE*\n\n _🎉 COMANDO EJECUTADO CON EXITO, AHORA EL MIEMBRO ES ADMINISTRADOR_`, m)
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
handler.tags = ['admin']

handler.command = /^(promote|admin)$/i

handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
