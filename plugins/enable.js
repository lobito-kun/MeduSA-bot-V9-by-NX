let handler = async (m, { conn, usedPrefix, command, args, isOwner, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isOwner || isOwner)) {
          global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isOwner || isOwner)) {
          global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isOwner || isOwner)) {
          global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isOwner || isOwner)) {
          global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
     case 'viewonce':
      if (m.isGroup) {
        if (!(isOwner || isOwner)) {
          global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.kickme = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    case 'mycontact':
    case 'mycontacts':
    case 'whitelistcontact':
    case 'whitelistcontacts':
    case 'whitelistmycontact':
    case 'whitelistmycontacts':
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      conn.callWhitelistMode = isEnable
      break
    default:
      if (!/[01]/.test(command)) throw `MeduS.A-bot | *ENABLE*\n\n
List option: welcome | delete | public | antilink | autolevelup | detect | document | whitelistmycontacts | viewonce

E:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim()
      throw false
  }
  m.reply(`MeduS.A-bot | *ENABLE*\n\n
*${type}*  *${isEnable ? 'ENCENDIDO' : 'APAGADO'}* ${isAll ? 'Exitoso ' : isUser ? '' : 'para este grupo.'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
handler.premium = true

module.exports = handler
