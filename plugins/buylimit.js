const xpperlimit = 480 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 3
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `💰 *MeduS.A-bank*\n\nHas comprado Leaf al banco MeduS.A-bank.\n\n*Gastado:* -${xpperlimit * count} XP\n*Comprado:* +${count} Leaf(s) (recuerda que cada comando cuesta 5 leaf)`, m)
  } else conn.reply(m.chat, `💰 *MeduS.A-bank*\n\nError de transacción! No tienes suficiente XP como para comprar ${count} Leaf... Recuerda que el Leaf Cuesta 480 xp y necesitas 5 por comando.`, m)
}
handler.help = ['buy <Cantidad de leaf>', 'buy 5', 'buyall (compra todo lo que tengas de xp)']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buy|buyleaf|buyall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.register = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

