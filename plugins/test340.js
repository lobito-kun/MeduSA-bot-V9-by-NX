// MINING IS LIFE!!!

let handler = async (m, { conn }) => {

let hasil = Math.floor(Math.random() * 1000)
global.DATABASE._data.users[m.sender].exp += hasil * 1 // Number(hasil)
   await m.reply(`Bien! ganaste ${hasil} exp minando!`)
}

handler.help = ['minar']
handler.tags = ['xp']
handler.command = /^(test340)$/i
handler.limit = true

module.exports = handler

