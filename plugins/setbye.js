let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Bye \n@user (Mention)')
  } else throw 'Esta bien?'
}
handler.help = ['setbye <texto>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

