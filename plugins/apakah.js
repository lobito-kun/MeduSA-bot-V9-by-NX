let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${pickRandom(['si','Talvez si','talvez','talvez no','no','Pregunta otra vez'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['es <texto>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^es$/i
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

