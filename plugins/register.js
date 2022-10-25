const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `MeduS.A-bot® | *Rᴇɢɪsᴛʀᴏ*\n\nYa estás registrado!!\nQuieres volver a registrarse? escribe: ${usedPrefix}unreg SERIAL (te lo dio el bot cuando te registraste)`
  if (!Reg.test(text)) throw `MeduS.A-bot® | *Rᴇɢɪsᴛʀᴏ*\n\nERROR! El comando es: !reg nombre.edad Ejemplo: !reg syntax.23 (es solo un ejemplo si te registras asi = ban (tambien no pongas cualquier cosa, tiene que ser tu nombre y edad, o ban.))*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío (alfanumérico)'
  if (!age) throw 'LA EDAD TIENE QUE SER REAL (Y no en blanco)'
  age = parseInt(age)
  if (age > 30) throw 'MeduS.A-bot® | *Rᴇɢɪsᴛʀᴏ*\n\nEDAD NO AUTORIZADA. Si de verdad tienes esa edad, comunicalo en !report Si es un error, tienes 1 intento restante. '
  if (age < 11) throw 'MeduS.A-bot® | *Rᴇɢɪsᴛʀᴏ*\n\nEDAD NO AUTORIZADA. Si de verdad tienes esa edad, comunicalo en !report Si es un error, reintenta en 2 hora(s) o seras baneado automaticamente.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`MeduS.A-bot® | *Rᴇɢɪsᴛʀᴏ*\n\n
¡Registro completado! ✅

┏━━━━❉ Registro ❉━━━━━━┓
┣⊱ Nombre: ${name}
┣⊱ Edad: ${age} 
┣⊱ S/N: ${sn}
┣
┣⊱ RECUERDA QUE EL S/N ES IMPORTANTE! guardalo bien.
┣
┣━━━━━━━━━━━━
┣⊱Gracias por registrarte! espero que disfrutes y cuides al bot.
┣━━━━━━━━━━━━
┣⊱!ayudaleaf Para ayuda de la economia
┣⊱!ayudaxp Ayuda para el sistema de experiencia
┣⊱!tnc para terminos y condiciones de uso
┣⊱!menu para el menu 
┣⊱!updates para ver las actualizaciones
┣⊱!report Para reportar al programador algun problema
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim())
}
handler.help = ['reg', 'registrar'].map(v => v + ' <nombre>.<edad>')
handler.tags = ['exp']
handler.group = true

handler.command = /^(registrar|reg(ister)?)$/i

module.exports = handler

