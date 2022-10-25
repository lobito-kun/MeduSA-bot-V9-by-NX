//adaptado para medusabot by arris XD Comando  | *©MeduS.A-bot*
let handler = async (m, { text, usedPrefix }) => {
    let goblok = `*©MeduS.A-bot* | *PPT*\n\nIncorrecto! las opciones son:\n\nTijeras, papel, piedra\n\n Ejemplo de uso: ${usedPrefix}ppt tijeras\n\n Ganas de 10 hasta 15 de Leaf`
    if (!text) throw goblok
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'piedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tijeras'
    } else {
        astro = 'papel'
    }

    //determina reglas del juego
    if (text == astro) {
        m.reply(`*Empate!*\n\n_Tu: ${text}_\n\n_MeduS.A-BOT: ${astro}_`)
    } else if (text == 'piedra') {
        if (astro == 'tijeras') {
            global.db.data.users[m.sender].limit += 11
            m.reply(`*Enhorabuena!*\n Ganaste *11 Leaf*\n\n*Tu: ${text}*\n\n_MeduS.A-BOT: ${astro}_`)
			await m.reply(`💰 *MeduS.A-bank®*\n\n*+ 11 LEAF* A tu cuenta!`)
        } else {
            m.reply(`Perdiste!!*\n\n _Tu: ${text}_\n\n*MeduS.A-BOT: ${astro}*`)
        }
    } else if (text == 'tijeras') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].limit += 11
            m.reply(`*Enhorabuena!*\n Ganaste *11 Leaf*\n\n*Tu: ${text}*\n\n_MeduS.A-BOT: ${astro}_`)
			await m.reply(`💰 *MeduS.A-bank®*\n\n*+ 11 LEAF* A tu cuenta!`)
        } else {
            m.reply(`*Perdiste!!*\n\n _Tu: ${text}_\n\n*MeduS.A-BOT: ${astro}*`)
        }
    } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.db.data.users[m.sender].limit += 11
            m.reply(`*Enhorabuena!*\n Ganaste *11 Leaf*\n\n*Tu: ${text}*\n\n_MeduS.A-BOT: ${astro}_`)
			await m.reply(`💰 *MeduS.A-bank®*\n\n*+ 11 LEAF* A tu cuenta!`)
        } else {
            m.reply(`*Perdiste!!*\n\n _Tu: ${text}_\n\n*MeduS.A-BOT: ${astro}*`)
        }
    } else {
        throw goblok
    }
}
handler.help = ['ppt (piedra papel o tijeras!)']
handler.tags = ['game']
handler.command = /^(ppt)$/i
handler.limit = true

module.exports = handler
