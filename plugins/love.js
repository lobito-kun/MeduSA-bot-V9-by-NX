let handler = async (m, { conn, text }) => {
 conn.reply(m.chat, `
MeduS.A-botÂ® | *MEDIDOR DE AMOR*
*Su amor por ti es:* ${pickRandom(['100% ðð *De 100%*','90% ðð *De 100%*','80% ð *De 100%*','70% ð *De 100%*','60% ð *De 100%*','50% ð *De 100%*','40% ð *De 100%*','30% ð *De 100%*','20% ð *De 100%*','10% ð£ *De 100%*','0% ð¤ *De 100%*'])}
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