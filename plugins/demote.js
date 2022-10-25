let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
	  
  conn.reply(m.chat,`MeduS.A-bot | *REMOVER ADMIN*\n\n _🎉 COMANDO EJECUTADO CON EXITO. EL USUARIO YA NO ES ADMINISTRADOR!_`, m)
}
handler.help = ['demote','member','↓'].map(v => v + ' @user')
handler.tags = ['admin']

handler.command = /^(demote|member)$/i

handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
