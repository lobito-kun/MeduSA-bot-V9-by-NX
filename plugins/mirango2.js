let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn }) => {
  //let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    //pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, rango } = global.db.data.users[who]
    //let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
   /* let str = `
┏━━━━❉ PROFILE ❉━━━━┓
┣⊱ Baneado: ${banned}
┣
┣⊱ Rango: ${rango}  (undefined = Usuario)
┣
┣⊱ Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n┣⊱ Info del perfil: ' + about : ''}
┣⊱ Número: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┣⊱ Link: https://wa.me/${who.split`@`[0]}${registered ? '\n┣⊱ Edad: ' + age : ''}
┣⊱ XP: ${exp} _(${exp - min} / ${xp})_\n┣⊱ Level Up: ${max - exp}
┣⊱ Nivel: ${level}
┣⊱ Leaf: ${limit}
┣⊱ Registrado: ${registered ? 'Sí (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\n┣⊱ Último Claim: ' + new Date(lastclaim) : ''}
┣━━━━━━━━━━━━
`.trim() */
    let mentionedJid = [who]
    //conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
	//if (banned === true) throw ` ${username} ESTA BANEADO, NO PODRA USAR EL BOT. ESCRIBE !ayudareport`
	if (rango === "STAFF") throw ` MeduS.A-bot | *RANGO*\n\nHola ${username}!, Tu rango es STAFF
  Debes dar soporte a los usuarios, dar instruccion sobre comandos (ensenar sobre cada comando)
  Tambien debes estar Al servicio de los usuarios, Del bot, Del HeadSTAFF y Programador. 
  Recuerda que tambien debes hacer cumplir los !tnc del bot. es lo mas importante...
  Puedes usar el comando !ban @user al que falle al TNC
  Recuerda que !staffmenu o !menustaff estan todos los comandos STAFF
  A cambio Tendras :
  todos los comandos premium y 5.000 XP cada 3 semanas! 
  Tus superiores son: Programador, Consejero, HeadStaff.
  Rangos:
  Programador (creador del bot)
  Consejero (consejero sobre inversion y mas sobre bot)
  HeadStaff (lider de los staff)
  Staff <--- tu (la policia del bot)
  Premium (usuario premium)
  Admin de grupo
  Usuario`
	if (rango === "HEADSTAFF") throw ` MeduS.A-bot | *RANGO*\n\nHola ${username}!, Tu rango es HeadSTAFF
  Eres el superior de los Staff, Das ordenes a los Staff, y eres encargado de que las cumplan.
  Tambien estas al Servicio del programador.
  Eres responsable de los STAFF y aplicar Sanciones.
  A demas, debes dar soporte a los usuarios, dar instruccion sobre comandos (ensenar sobre cada comando)
  Tambien puedes dar premium a otros users (con autorizacion)
  Y tambien puedes dar STAFF con autorizacion...
  A cambio Tendras todos los comandos premium! y 10.000 XP cada 3 semanas! 
  Tus superiores son: Programador, Consejero.
  Rangos:
  Programador (creador del bot)
  Consejero (consejero sobre inversion y mas sobre bot)
  HeadStaff <--- tu (lider de los staff)
  Staff (la policia del bot)
  Premium (usuario premium)
  Admin de grupo
  Usuario`
	if (rango === "BOT") throw ` MeduS.A-bot | *RANGO*\n\n Hola ${username}! tu eres un BOT...`
	if (rango === "PROGRAMADOR") throw ` Hola ${username}!!! Tu rango es Programador del bot.
  Rangos:
  Programador <--- tu (creador del bot)
  Consejero (consejero sobre inversion y mas sobre bot)
  HeadStaff (lider de los staff)
  Staff (la policia del bot)
  Premium (usuario premium)
  Admin de grupo
  Usuario`
	if (rango === "PREMIUM") throw ` MeduS.A-bot | 👑 *PREMIUM*\n\nEres premium!`
	//if (rango === "undefined") throw ` Eres un simple usuario`
	//if (banned === false) throw `${username} No violo los TNC`
  }
}
handler.help = ['mirango [@user]']
handler.tags = ['MeduSa-bot']
handler.command = /^mirango$/i
module.exports = handler

