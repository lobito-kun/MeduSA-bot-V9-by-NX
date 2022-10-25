let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*No hay votacion en este grupo!*_\n\n*${usedPrefix}Iniciarvoto* - para iniciar votacion`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Ya votaste!'
    if (/si/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/no/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`Listo!\n\n*${usedPrefix}cheqvote* - Para chequear votos`)

}
handler.help = ['vote']
handler.tags = ['vote']
handler.command = /^(si|no)?vote$/i
handler.group = true
module.exports = handler