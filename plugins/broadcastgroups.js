let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks)
  for (let id of groups) conn.copyNForward(id, content, true)
  conn.reply(m.chat, `📢 *DIFUSIÓN (GRUPOS)*\n\n_Mensajes de difusión enviados a ${groups.length} grupos_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

