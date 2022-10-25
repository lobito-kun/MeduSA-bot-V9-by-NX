async function handler(m) {
    if (!m.quoted) throw 'MeduS.A-bot | *REENVIAR*\n\nRESPONDE AL MENSJAE!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'MeduS.A-bot | *REENVIAR*\n\n No detecto si es un error o esta la tarea completada.'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['reenviar']
handler.tags = ['varios']
handler.command = /^reenviar$/i
handler.register = true
module.exports = handler