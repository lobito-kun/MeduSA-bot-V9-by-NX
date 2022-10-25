const crypto = require('crypto')

const xp_first_time = 4800
const xp_link_creator = 5480
const xp_bonus = {
    5: 4800,
   10: 9600,
   20: 14000,
   50: 26000,
  100: 60000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'No puedes utilizar el codigo de referencia!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'link de referencia no valido'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
MeduS.A-bot | *ANUNCIOS*\n\nEnhorabuena!
+${xp_first_time} XP De regalo por utilizar el Codigo de REFERENCIA de ese usuario!
requerda que para cambiarlo por leaf, debes escribir !buyall
`.trim())
    m.reply(`
MeduS.A-bot | *ANUNCIOS*\n\nOye! alguien utilizo tu codigo de referencia!
+${xp_link_creator + extra} XP Para ti! gracias por la ayuda!.
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
MeduS.A-bot | *REF*\n\nObten ${xp_first_time} De XP por cada usuario que utilize tu link o codigo de refencia

Codigo: *${code}*

${command_link}
`.trim()
    m.reply(`
MeduS.A-bot | *REF*\n\nConsigue ${xp_link_creator} De XP por cada gente que utilize tu codigo de referencia! es la forma mas rapida de conseguir xp.
recuerda que el codigo lo tiene que utilizar, una persona que nunca utilizo el bot.

${users[m.sender].ref_count} Personas utilizaron tu codigo!

No pueden ser tus numeros, si haces trampa, el bot te banea.

No puede ser gente aleatoria!

Codigo de referencia: ${code}

Comparte el link con amigos!: ${command_link}

O envia el mensaje a un amigo wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Usuarios = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['fun']

handler.command = ['ref']

handler.register = true

module.exports = handler