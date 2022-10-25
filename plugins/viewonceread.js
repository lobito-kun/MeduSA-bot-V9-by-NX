let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'where\'s message?', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Prueba de comando viewOnce'
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('ERROR! la imagen expiro ya, ni el bot la puede ver.'))
}

handler.help = ['verotravez (con este comando, puedes ver otra vez las imagenes para vez solo 1 vez']
handler.tags = ['tools']

handler.command = /^verotravez/i

module.exports = handler