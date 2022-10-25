let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*No se esta votando en el grupo!*_\n\n*${usedPrefix}iniciarvoto* - Para iniciar voto`
    delete conn.vote[id]
    m.reply(`Lista para una nueva votacion!`)

}
handler.help = ['borrarvoto']
handler.tags = ['vote']
handler.command = /^borrarvoto$/i
handler.group = true
handler.admin = false
module.exports = handler