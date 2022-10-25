let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Utiliza *${usedPrefix}list${which}* Para ver la lista`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' No estan en la lista de mensajes`
    delete msgs[text]
    m.reply(`Con exito se elimino el mensjae de la lista de mensaje con el nombre '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/

module.exports = handler