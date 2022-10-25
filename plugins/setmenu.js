let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu Seteado exitoso' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Reseteo menu', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' Seteado exitoso' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' RESETT', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Experiencia que necesitas para subir de nivel)
%limit (Limit)
%name (Nombre)
%weton (Actual)
%week (Semana)
%date (Date)
%time (Hora)
%uptime (Encendido Bot)
%rtotalreg (Numero de usuarios registrados en la base de datos del bot)
%totalreg (Numero de usuarios en la base de datos)
%npmname
%npmdesc
%version
%github

Seccion de menu:
%category (Categoria)

Parte Menu Body:
%cmd (Command)
%islimit (Si el comando esta limitado)
`.trim()
