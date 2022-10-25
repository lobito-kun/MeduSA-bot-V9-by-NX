let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Configurado! ayuda: Bienvenido\n@user (Mention)\n@subject (GRUPO)\n@desc (Descrip del Grup)')
  } else throw 'TODO OK?'
}
handler.help = ['setwelcome <texto>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler
handler.premium = true

