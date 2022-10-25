let handler = async (m, { conn, text }) => {
  if (!text) throw 'El texto?'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <texto>']
handler.tags = ['programador y mods']
handler.mods = true
handler.rowner = true

handler.command = /^mention$/i

module.exports = handler
