let handler = async m => m.reply(`
MeduS.A-bot® | *ADMINISTRACION⚠️*

Comandos Para la ADMINISTRACION de MeduS.A-bot, abusar de estos se te removerá el rango!


- !shidetag/sannounce texto
*hace un anuncio y le hace tagg secreto a todos los usuarios. igual que el hidetag*

- !restart 
*Reiniciar el bot solo cuando el bot no envie los audios (solo programador)*

- !banlist
*Lista de usuarios baneados*

- !manual
*Manual para saber como actuar en caso de sospecha a Violacion de TNC*

- !enable/disable
*ACTIVA Y DESACTIVA CONFIG DEL BOT. (SOLO PROGRAMADOR)*

- !banchat
*Banea el chat completo. (debes tener permiso)*

- !unbanchat
*DesBanea el chat completo. (debes tener permiso)*

- !darpremium @user
*Dar premium a un usuario* (Solo dar premium con autorización del HeadStaff o Programador)

- !aceptar link
*Aprobar una solicitud de grupo*

- !join LINK 
*El bot entra al link de ese grupo. (recuerda que debes tener permiso)*

- !msg número|texto
*Enviar un aviso o comunicado a un usuario como de baneo*
(el numero tiene que ser sin espacios. si es de mexico, despues del 52 se agrega un 1.
ejemplo, 521xxxxxxxxx)

- !msup número|texto
*Responder una duda enviada por soporte*
(el numero tiene que ser sin espacios. si es de mexico, despues del 52 se agrega un 1.
ejemplo, 521xxxxxxxxx)

- !fakereply
*Respuesta fake*

- !ban @user
*Banear un usuario(ENVÍA CAP AL HeadStaff o Programador  de porque ban. ), luego de hacerlo le comunicas con /msg*

- !unban @user 
*Desbanear un usuario (debes tener permiso)*

- !leave
*Sacar el bot de un grupo, debes unirte primero y escribir el comando*

- !bcgc
*Dar un anuncio de staff, informar errores o correcciones*
`.trim()) // XD
handler.help = ['staffmenu']
handler.tags = ['Staff']
handler.command = /^(staffmenu)$/i
handler.mods = true
handler.register = true

module.exports = handler
