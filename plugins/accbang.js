let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'que'
  if (isAdmin) throw 'Yo ya soy admin!'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
