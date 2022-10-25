let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 MeduS.A-bot | *Group INFO* 」*\n
*ID:* 
${groupMetadata.id}
*Nombre:* 
${groupMetadata.subject}
*Descripcion:* 
${groupMetadata.desc}
*Personas totales:*
${participants.length} Members
*Creador del grupo:* 
@${m.chat.split`-`[0]}
*Admins:*
${listAdmin}
*Config del grupo:*
(si quieres activar algo,
habla a !creador )
${isBanned ? '✅' : '❌'} Baneado
${welcome ? '✅' : '❌'} Bienvenida
${detect ? '✅' : '❌'} Detect
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link
*Message Settings:*
Bienvenida: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i
//handler.command = /^(test347)$/i

handler.group = true

module.exports = handler