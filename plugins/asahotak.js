let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Todavia hay preguntas sin responder en este chat', conn.asahotak[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/asahotak', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} segundos*
escribe ${usedPrefix}o por ayuda
Bonus: ${poin} XP
`.trim()
    conn.asahotak[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.reply(m.chat, `Tiempo acabado, la respuesta es *${json.result.jawaban}*`, conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
//handler.help = ['testjuego1']
//handler.tags = ['game']
handler.command = /^testjuego1/i

module.exports = handler