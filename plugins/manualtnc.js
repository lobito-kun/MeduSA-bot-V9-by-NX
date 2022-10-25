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
	if (rango === "STAFF") throw ` MeduS.A-bot | *MANUAL*\n\nHola ${username}!, Tu rango es STAFF. 
	este manual, te resumimos el TNC y damos mas directivas.
	recuerda que tu superiores son: HeadSTAFF y Programador.
	
	Tus comandos especiales estan en !staffmenu
	-----------------------------------------------
	faltas graves: 
	BAN de 7 DIAS a PERMANENTE:
	EXPULSAR AL BOT
	HACERSE PASAR POR PROGRAMADOR
	HACERSE PASAR POR ADMINISTRACION DEL BOT
	AMENAZAR LA INTEGRIDAD DEL BOT
	INTENTO DE SABOTAJE PLANIFICADO AL BOT
	INSULTAR AL PROGRAMADOR DEL BOT
	INSULTAR AL HEADSTAFF
	
	------------------------------------------------------------
	FALTAS MEDIAS:
	BAN de 1 a 7 DIAS:
	USAR EL BOT EN PRIVADO
	INTENTO DE SABOTAJE SIN CONOCIMIENTO
	ABUSO DEL COMANDO merindo EN !ttt (no dejar
	que farmeen xp)
	SPAM MASIVO AL BOT DESPUES DE ADVERTENCIA
	SEGUIR INSULTANDO AL BOT DESPUES DE ADVERTENCIA
	INSULTAR AL STAFF
	DEJAR PARTIDA DE !ttt A LA MITAD
	 
	-------------------------------------------------------------
	FALTAS LEVES
	BAN DE 1 a 24 HORAS
	INSULTAR AL BOT
	SPAM DE COMANDOS (NO ESPERAR 3 SEGUNDOS)
	INSULTAR EL SISTEMA DE ECONOMIA
	DECIR QUE EL BOT ES UNA ESTAFA
	HABLAR MAL DEL BOT
	- USAR EL BOT PARA:
    • Sexo, Traficante de personas
    • Comportamientos daninos (no tengo enie xd)
    • Crimenes en contra de la humanidad
    • Violencia (A menos que sea para proteccion)
    • Quemar bosques/ desforestacion.
    • Discursos de odio o Discriminacion base a la nacionalidad.
	--------------------------------------------------------------
	
	CUALQUIER CONSULTA QUE TENGAS, U OTRA DUDA, ESCRIBE AL CREADOR,
	EN EL GRUPO DEL BOT.\n\n_Att: MeduS.A-bot | Equipo de administración._
	`
	if (rango === "HEADSTAFF") throw ` MeduS.A-bot | *MANUAL*\n\nHola ${username}!, Tu rango es HeadSTAFF. 
	este manual, te resumimos el TNC y damos mas directivas.
	recuerda que tu superiores son: Programador.
	Tu principal tarea es controlar al STAFF que cumplan.
	Controlar grupos y llevar chequeo, a demas conseguir grupos
	para el bot.
	Diras que staff va a que grupo.
	y con permiso del programador, podras buscar mas staff.
	
	
	Tus comandos especiales estan en !staffmenu
	-----------------------------------------------
	faltas graves: 
	BAN de 7 DIAS a PERMANENTE:
	EXPULSAR AL BOT
	HACERSE PASAR POR PROGRAMADOR
	HACERSE PASAR POR ADMINISTRACION DEL BOT
	AMENAZAR LA INTEGRIDAD DEL BOT
	INTENTO DE SABOTAJE PLANIFICADO AL BOT
	INSULTAR AL PROGRAMADOR DEL BOT
	INSULTAR AL HEADSTAFF
	EN STAFF:
	ABUSO DE PODER
	BANEAR SIN PRUEBAS
	TENER REPORTES GRAVES DE OTROS USUARIOS
	NO RESPETAR AL PROGRAMADOR NI TNC
	BAN de 7 DIAS a PERMANENTE + PERDIDA DE RANGO 
	
	------------------------------------------------------------
	FALTAS MEDIAS:
	BAN de 1 a 7 DIAS:
	USAR EL BOT EN PRIVADO
	INTENTO DE SABOTAJE SIN CONOCIMIENTO
	ABUSO DEL COMANDO merindo EN !ttt (no dejar
	que farmeen xp)
	SPAM MASIVO AL BOT DESPUES DE ADVERTENCIA
	SEGUIR INSULTANDO AL BOT DESPUES DE ADVERTENCIA
	INSULTAR AL STAFF
	DEJAR PARTIDA DE !ttt A LA MITAD
	STAFF:
	FALLAR TNC
	NO RESPETAR AL HEADSTAFF
	ROBAR GRUPOS, ABUSO DE CONFIANZA DE OTROS GRUPOS
	INSULTAR SIN RAZON OTROS GRUPOS
	BAN de 7 DIAS a PERMANENTE + PERDIDA DE RANGO  
	-------------------------------------------------------------
	FALTAS LEVES
	BAN DE 1 a 24 HORAS
	INSULTAR AL BOT
	SPAM DE COMANDOS (NO ESPERAR 3 SEGUNDOS)
	INSULTAR EL SISTEMA DE ECONOMIA
	DECIR QUE EL BOT ES UNA ESTAFA
	HABLAR MAL DEL BOT
	- USAR EL BOT PARA:
    • Sexo, Traficante de personas
    • Comportamientos daninos (no tengo enie xd)
    • Crimenes en contra de la humanidad
    • Violencia (A menos que sea para proteccion)
    • Quemar bosques/ desforestacion.
    • Discursos de odio o Discriminacion base a la nacionalidad.
	--------------------------------------------------------------
	
	CUALQUIER CONSULTA QUE TENGAS, U OTRA DUDA, ESCRIBE AL CREADOR,
	EN EL GRUPO DEL BOT.\n\n_Att: MeduS.A-bot | Equipo de administración._`
	if (rango === "BOT") throw ` MeduS.A-bot | *RANGO*\n\n Hola ${username}! tu eres un BOT, debes seguir los scripts que
	ya estan programados, XD`
	if (rango === "PROGRAMADOR") throw `MeduS.A-bot | *MANUAL*\n\n Hola ${username}! Tu eres el programador del bot, haces las reglas.`
	//if (rango === "PREMIUM") throw ` MeduS.A-bot | 👑 *PREMIUM*\n\nEres premium!`
	//if (rango === "undefined") throw ` Eres un simple usuario`
	//if (banned === false) throw `${username} No violo los TNC`
  }
}
handler.help = ['manual']
handler.tags = ['Staff']
handler.command = /^manual$/i
module.exports = handler
handler.mods = true

