// test!!! comando para medusa bot, no robar XD

let handler = async (m, { conn }) => {

let lote = Math.floor(Math.random() * 106)

if (lote > 99) {
        astro = 'win'
		}
if (lote < 98) {
        astro = 'lose' 
		}
		
	if (astro == 'win') {
            global.db.data.users[m.sender].exp += 2200
            m.reply(`MeduS.A-bot® | *LOTERIA*\n\n*Enhorabuena!*\n*Ganaste la loteria!!* Son: *2200 EXP* para ti!\n Te toco el numero ${lote} `) //aqui para ganar
			await m.reply(`💰 MeduS.A-bot® | *LOTERIA*\n\n* + 2200 EXP*!`)
			}
			
    if (astro == 'lose') {
            //SI PIERDES xd
			await m.reply(`MeduS.A-bot® | *LOTERIA*\n\n Perdiste! te toco el numero ${lote}. \n Necesitas el numero 100 para ganar.\n Sigue intentando, que estas muy cerca del premio!!`)
			}



}
handler.help = ['lotep (Loteria PREMIUM! Es mas facil de ganar, y da MUCHA EXP!)']
handler.tags = ['xp']
handler.command = /^(lotep)$/i
handler.limit = true
handler.premium = true

module.exports = handler

