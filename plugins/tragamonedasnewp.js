// NUEVO TRAGAMONEDAS PARA MEDUSA BOT by arris

let handler = async (m, { conn }) => {

var myArray = [
  "🍉|🍋|🍌",
  "🍉|🍋|🍋",
  "🍉|🍋|🍌",
  "🍌|🍌|🍋",
  "🍉|🍋|🍋",
  "🍋|🍋|🍋",
  "🍌|🍉|🍌",
  "🍌|🍌|🍉",
  "🍋|🍋|🍉",
  "🍌|🍉|🍋",
  "🍋|🍋|🍌"

];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];



if (randomItem == '🍋|🍋|🍋') {
        astro = 'win'
		}
if (randomItem !== '🍋|🍋|🍋') {
        astro = 'lose' 
		}
		
	if (astro == 'win') {
            global.db.data.users[m.sender].exp += 10000
            m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n GANASTE!\n\n ${randomItem} <===\n\n Sigue asi! Podrias ganar hasta 50000 EXP!`) //aqui para ganar
			await m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n*+ 10000 EXP* A tu cuenta!`)
			}
			
    if (astro == 'lose') {
            //SI PIERDES xd
			global.db.data.users[m.sender].exp += 100
			await m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n Perdiste!\n\n ${randomItem} <===\n\n Sigue intentando, que estas muy cerca de GANAR!!\n (Recuerda que hacer spam de este comando = ban.) `)
			await m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n*+ 100 EXP* Por intentarlo!`)
			}


}


handler.help = ['!tragamonedasp (PARA PREMIUM! gana hasta 20000 EXP)']
handler.tags = ['xp']
handler.command = /^(tragamonedasp)$/i
handler.limit = true
handler.premium = true

module.exports = handler

