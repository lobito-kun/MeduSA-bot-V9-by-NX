let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'MeduS.A-bot | *JOIN*\n\nLink invalido'
    let res = await conn.acceptInvite(code)
    m.reply(`MeduS.A-bot | *JOIN*\n\nEL BOT SE UNIO AL GRUPO: ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['Staff']

handler.command = /^join$/i

handler.premium = false
handler.smod = true

module.exports = handler
