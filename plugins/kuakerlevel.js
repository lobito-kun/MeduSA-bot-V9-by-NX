// test!!! no robes marikon jsjsjs al menos dame las gracias uwu

let handler = async (m, { text, conn }) => {

let kuaker = Math.floor(Math.random() * 100)
   await m.reply('El nivel de kuaker de ' + text + `, es en total: ${kuaker} %`)
}

handler.help = ['kuaker (mide tu nivel de kuaker)']
handler.tags = ['games']
handler.command = /^(kuaker)$/i
handler.limit = false

module.exports = handler
