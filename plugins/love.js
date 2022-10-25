let handler = async (m, { conn, text }) => {
 conn.reply(m.chat, `
MeduS.A-bot® | *MEDIDOR DE AMOR*
*Su amor por ti es:* ${pickRandom(['100% 😍💖 *De 100%*','90% 😘💕 *De 100%*','80% 💕 *De 100%*','70% 😍 *De 100%*','60% 😙 *De 100%*','50% 😗 *De 100%*','40% 😐 *De 100%*','30% 😑 *De 100%*','20% 😖 *De 100%*','10% 😣 *De 100%*','0% 😤 *De 100%*'])}
Deberias pedirle que sea tu  novio/a ?
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['love @user (mide el nivel de amor que te tiene esa persona']
handler.tags = ['game']
handler.command = /^love$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}