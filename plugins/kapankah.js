let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${Math.floor(Math.random() * 10)} ${pickRandom(['segundos', 'minutos', 'horas', 'dias', 'Sabado', 'mes', 'Anos', 'Decadas', 'Siglos'])} otra vez ...
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['', 'cuando'].map(v => 'cuando' + v + ' <text>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^cuando?$/i
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

