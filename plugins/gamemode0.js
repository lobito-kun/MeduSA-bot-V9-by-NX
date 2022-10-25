let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`Your game mode has been updated.`, m)
}
handler.help = ['gamemode0 (survival mode)']
handler.tags = ['info']
handler.command = /^(gamemode)$/i
handler.owner = false
handler.mods = false
handler.register = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
