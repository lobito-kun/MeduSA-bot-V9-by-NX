// test!!! comando para medusa bot, no robar XD

let handler = async (m, { conn }) => {

let lote = Math.floor(Math.random() * 103)

if (lote > 99) {
        astro = 'win'
		}
if (lote < 98) {
        astro = 'lose' 
		}
		
	if (astro == 'win') {
            global.db.data.users[m.sender].limit += 100
            m.reply(`MeduS.A-bot® | *LOTERIA*\n\n*Enhorabuena!*\n*Ganaste la loteria!!* Son: *100 Leaf* para ti!\n Te toco el numero ${lote} `) //aqui para ganar
			await m.reply(`💰 *MeduS.A-bank®*\n\n*+ 100 LEAF* A tu cuenta!`)
			}
			
    if (astro == 'lose') {
            //SI PIERDES xd
			global.db.data.users[m.sender].exp += 100
			await m.reply(`MeduS.A-bot® | *LOTERIA*\n\n Perdiste! te toco el numero ${lote}. \n Necesitas el numero 100 para ganar.\n Sigue intentando, que estas muy cerca del premio!!`)
			await m.reply(`MeduS.A-bot® | *LOTERIA*\n\n*+ 100 EXP* Por intentarlo!`)
			}



}
handler.help = ['lote (La loteria!! si te sacas 100 ganas 100 LEAF!!']
handler.tags = ['xp']
handler.command = /^(lote)$/i
handler.limit = true

module.exports = handler

