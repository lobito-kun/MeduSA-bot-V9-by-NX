let handler = async (m, { conn, text }) => {
  if (!text) throw 'Que quieres que diga?'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['decir <texto>']
handler.tags = ['programador y mods']
handler.mods = false
handler.rowner = false
handler.group = true
handler.admin = true
handler.limit = false

handler.command = /^decir$/i

module.exports = handler
