//Max, que haces viendo mis scripts? Owo
let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/simpcard', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'simpcard.png', 'MeduS.A-bot | *LICENCIA SIMP*\n\n Aqui tienes tu licencia para ser SIMP', m)
}

handler.help = ['simp (licencia simp)']
handler.tags = ['maker']

handler.command = /^(simp)$/i

module.exports = handler