let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw 'MeduS.A-bot | *COMANDO DELETE*\n\n EL MENSAJE ES IMPORTANTE, O NO ES EL BOT.'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
  conn.reply(m.chat,`MeduS.A-bot | *COMANDO DELETE*\n\n EL MENSAJE FUE ELIMINADO.`, m)
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i
handler.admin = true

module.exports = handler
