let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, ` 👬🏻 Su nivel de gay, es: ${pickRandom(['100%','70%','90%','1%','40%','20%','23%','44%','65%','21%','66%','12%','31%','99%','33%'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
//handler.help = ['!gay nombre']
//handler.tags = ['kerang']
//handler.command = /^gay$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.register = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

