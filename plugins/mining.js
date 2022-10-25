// test!!!

let handler = async (m, { conn }) => {

let hasil = Math.floor(Math.random() * 2700)
global.db.data.users[m.sender].exp += hasil * 1 // Number(hasil)
   await m.reply(`Bien! pudiste minar ${hasil} de exp!`)
}

handler.help = ['mining (con este comando puedes minar XP']
handler.tags = ['xp']
handler.command = /^(mining)$/i
handler.limit = true

module.exports = handler