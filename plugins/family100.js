let fetch = require('node-fetch')
let winScore = 500
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Todavia hay preguntas sin responder en el chat', this.game[id].msg)
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/family100', {}, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
*Pregunta:* ${json.soal}

Aqui estan *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} XP Por cada respuesta correcta
    `.trim()
    this.game[id] = {
        id,
        msg: await m.reply(caption),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
//handler.help = ['family100']
//handler.tags = ['game']
handler.command = /^juego223$/i

module.exports = handler