let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', 'MeduS.A-bot | *STAFF MSG*\n\nLicencia Horny', m)
}

handler.help = ['horny']
handler.tags = ['maker']

handler.command = /^(horny)$/i

module.exports = handler