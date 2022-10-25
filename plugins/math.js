let handler = async (m, { conn, args, usedPrefix }) => {
  conn.math = conn.math ? conn.math : {}
  if (args.length < 1) throw `
Mode: ${Object.keys(modes).join(' | ')}

ejemlo de uso: ${usedPrefix}math medium
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
Mode: ${Object.keys(modes).join(' | ')}

Ejemlo de uso: ${usedPrefix}math medium
`.trim()
  let id = m.chat
  if (id in conn.math) return conn.reply(m.chat, 'Todavia hay preguntas sin responder!', conn.math[id][0])
  let math = genMath(mode)
  conn.math[id] = [
    await conn.reply(m.chat, `Cual es el resultado de *${math.str}*?\n\nTimeout: ${(math.time / 1000).toFixed(2)} Segundos\nBonus por pregunta bien respondida: ${math.bonus} XP`, m),
    math, 4,
    setTimeout(() => {
      if (conn.math[id]) conn.reply(m.chat, `Tiempo terminado!\nLa respuesta era ${math.result}`, conn.math[id][0])
      delete conn.math[id]
    }, math.time)
  ]
}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math/i
handler.register = true

module.exports = handler

let modes = {
  noob: [-3, 3,-3, 3, '+-', 15000, 20],
  easy: [-10, 10, -10, 10, '*/+-', 16000, 50],
  medium: [-40, 40, -20, 20, '*/+-', 20000, 180],
  hard: [-100, 100, -70, 70, '*/+-', 30000, 480],
  extreme: [-99999, 9999, -99999, 99999, '*/', 17000, 4800],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 13000, 7200],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 9000, 49920]
} 

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
