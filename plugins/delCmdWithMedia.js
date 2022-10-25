module.exports = Object.assign(async function handler(m, { text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `No problemas`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'NO TIENES PERMISO PARA BORRAR ESTE STICKER DE LA BASE DE DATOS!!!!!!'
    delete sticker[hash]
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'del' + v + ' <text>'),
    tags: ['database'],
    command: ['delcmd']
})