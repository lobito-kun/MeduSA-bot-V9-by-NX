let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_Todavia hay votacion activa en este grupo!_\n\n*${usedPrefix}borrarvoto* - Para borrar votaciones`
    }
    m.reply(`El voto inicia!\n\n*${usedPrefix}sivote* - para si\n*${usedPrefix}novote* - Para no\n*${usedPrefix}cheqvote* - para chequear vote\n*${usedPrefix}borrarvoto* - Para Cancelar la votacion`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['iniciarvoto [razon]']
handler.tags = ['vote']
handler.command = /^iniciarvoto$/i
handler.limit = true
handler.group = true
handler.admin = false
module.exports = handler