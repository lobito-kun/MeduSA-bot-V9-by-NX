// NUEVO TRAGAMONEDAS PARA MEDUSA BOT by arris

let handler = async (m, { conn }) => {

var myArray = [
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐",
  "๐|๐|๐"

];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];



if (randomItem == '๐|๐|๐') {
        astro = 'win'
		}
if (randomItem !== '๐|๐|๐') {
        astro = 'lose' 
		}
		
	if (astro == 'win') {
            global.db.data.users[m.sender].limit += 15
            m.reply(`MeduS.A-botยฎ | *TRAGA-MONEDAS*\n\n GANASTE!\n\n ${randomItem} <===\n\n Sigue asi! Podrias ganar hasta 150 LEAF!`) //aqui para ganar
			await m.reply(`๐ฐ *MeduS.A-bankยฎ*\n\n*+ 15 LEAF* A tu cuenta!`)
			}
			
    if (astro == 'lose') {
            //SI PIERDES xd
			global.db.data.users[m.sender].exp += 220
			await m.reply(`MeduS.A-botยฎ | *TRAGA-MONEDAS*\n\n Perdiste!\n\n ${randomItem} <===\n\n Sigue intentando, que estas muy cerca de GANAR!!\n `)
			await m.reply(`MeduS.A-botยฎ | *TRAGA-MONEDAS*\n\n*+ 220 EXP* Por intentarlo!`)
			}


}


handler.help = ['!tragamonedas (Prueba tu suerte! ganas 15 leaf!)']
handler.tags = ['xp']
handler.command = /^(tragamonedas)$/i
handler.limit = true

module.exports = handler

