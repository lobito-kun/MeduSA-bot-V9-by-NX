const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    let iya = `MeduS.A-bot | *STAFF MSG*\n\nPara enviar un mensaje a un usuario escribe */msm (número|mensaje)*\n\n_Ejemplo: ${usedPrefix}msm 59898310750|hola_`
    let [n, mes] = text.split('|')
    try {
        if (!n) throw iya
        if (n.startsWith('08')) throw iya
        if (!mes) throw iya
        if (mes.length > 700) throw 'Máximo 700 caracteres!'
        if (mes) {
            let n1 = n.replace('-', '')
            let n2 = n1.replace('+', '')
            let n3 = n2.replace(' ', '')
            console.log(m)
            no = m.sender.split("@s.whatsapp.net")
            let teks = `MeduS.A-bot | *⚠️ AVISO*\n\nTienes un nuevo mensaje por parte del equipo de administración del bot, por favor léelo!\n\n📝 *Mensaje:* ${mes} \n\n_Las respuestas a este mensaje no seran leidas._\n\n_Att: MeduS.A-bot | Equipo de administración._`
            conn.sendMessage(`${n3}@s.whatsapp.net`, teks, MessageType.text, {
                contextInfo: {
                    mentionedJid: [m.sender]
                }
            }
            )
            m.reply('MeduS.A-bot | *STAFF MSG*\n\nMensaje enviado exitosamente al usuario seleccionado.')
        } else throw iya
    } catch (e) {
        console.log(e)
        throw iya
    }
}
handler.help = ['!msg numero | texto']
handler.tags = ['Staff']
handler.command = /^(msg)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null

module.exports = handler
