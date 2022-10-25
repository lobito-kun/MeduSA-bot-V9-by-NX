let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role, banned, rango, errores } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `*「 MeduS.A-bot | *PROFILE* 」*\n
🚫 Baneado: ${banned}

🥇 Rango: ${rango}  (undefined = Usuario)

🔖 Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nInfo: ' + about : ''}
☎️ Numero: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${who.split`@`[0]}${registered ? '\nEdad: ' + age : ''}
📍 Experiencia: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Listo *${usedPrefix}levelup*` : `${math} Exp para subir de nivel`}]
📌 Nivel: ${level}
👤 Rango de nivel: *${role}*
💶 Leaf: ${limit}
🖇️ Registrado: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}
👑 Premium: ${prem ? 'Yes' : 'No'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
	if (banned === true) throw ` MeduS.A-bot | *BANEO*\n\n ${username} ESTA BANEADO, NO PODRA USAR EL BOT. ESCRIBE !banlist Para saber quienes estan baneados, o !ayudareport para desban.`
	//if (errores === "ERR1") throw ` Este usuario, ${username} , es un STAFF oficial del bot. Y tiene 1/3 Advertencia(s) Por no hacer cumplir los TNC del bot.`
	if (rango === "STAFF") throw ` MeduS.A-bot | *RANGO*\n\n Este usuario, ${username} , es un STAFF oficial del bot.`
	if (rango === "HEADSTAFF") throw ` MeduS.A-bot | *RANGO*\n\nEste usuario, ${username} , es un HEADSTAFF oficial del bot.`
	if (rango === "BOT") throw ` MeduS.A-bot | *BOT*\n\n ${username} Es un bot...`
	if (rango === "PROGRAMADOR") throw ` MeduS.A-bot | *RANGO*\n\n ${username} Es un programador del bot.`
	if (prem === true) throw ` MeduS.A-bot | 👑 *PREMIUM*\n\n ${username} Es un usuario PREMIUM del bot!`
	//if (banned === false) throw `${username} No violo los TNC`
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|perfil$/i
module.exports = handler
