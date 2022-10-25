let handler = m => m

let linkRegex = /!kickme/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('MeduS.A-bot | *NULL*\n\n???????????????????????????????')
    if (global.opts['kickme']) {
      if (isAdmin || !isBotAdmin) return true
       this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
