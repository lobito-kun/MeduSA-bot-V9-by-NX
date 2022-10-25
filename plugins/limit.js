let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`💰 *MeduS.A-bank*\n\n En tu cuenta, te quedan: ${global.db.data.users[who].limit} Leaf(s), recuerda que cada comando semi premium cuesta 5 leaf. Si necesitas ayuda, escribe !ayudaleaf`)
}
handler.help = ['leaf [@user]']
handler.tags = ['xp']
handler.command = /^(leaf)$/i
handler.register = true
module.exports = handler