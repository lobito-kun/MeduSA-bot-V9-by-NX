///case by arris
//No robes max XD
//thx for all creator bot
let handler = async (m, { conn, isPrems, text }) => {
	let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
	if (!teks) throw 'motivo?'
	let countrt = ['Argentina','Arabia saudita','Geometry America','sri lanka','finlandia','india','australia','china','japon','Corea del sur','Corea del norte','colombia','malaysia','norte america','canada','brazil','alemania','uzbekistan','qatar','thailandia','islandia','new zealand','cuba','mexico','texas','arabia saudita','Geometry America']
let country = countrt[Math.floor(Math.random() * countrt.length)]
let yoi = Math.floor(Math.random() * 10) + 12
let yoih = Math.floor(Math.random() * 10) + 13
let bekal = Math.floor(Math.random() * 2) + 12
global.db.data.users[m.sender].exp += isPrems ? yoih : yoi
m.reply(`*MeduS.A-bot | *TEST 339/23*\n\n\Tu viaje se detiene!*\nPero solo hasta *🏳️${country}*\n*Debido a :* ${text}\n\nTu regalo !\n**️⃣ Exp :* +${isPrems ? yoih : yoi}\n*🍒 frutas :* ${bekal}\n\n*MeduS.A-bot | *AVENTURA**`)
}

//handler.help = ['adventure']
//handler.tags = ['game']
handler.command = /^test339/i

module.exports = handler

