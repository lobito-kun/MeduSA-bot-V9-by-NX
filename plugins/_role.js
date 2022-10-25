let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Novato'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Aprendiz'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Guerrero'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Experto'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Maestro del bot'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Maestro supremo del bot'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Golden user'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Full Golden user'
          : 'Leyenda'
  user.role = role
  return true
}

module.exports = handler