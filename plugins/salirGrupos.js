let handler = async (m, { conn, usedPrefix, command }) => {

  await m.reply(`
*Adios amigos! nos divertimos mucho juntos, no? pero la administracion del bot me pide
que me retire... asi que adios! espero volver a verlos... 😓*
`.trim())

 conn.groupLeave(m.chat)
}
handler.help = ['leavegc']
handler.tags = ['group']

handler.command = /^leavegc$/i

handler.group = true
handler.owner = true

module.exports = handler 