// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Ejemplo de uso, !report Aqui tu mensaje, maximo 300 caracteres.'
    if (text.length > 300) throw 'El texto es muy largo... Maximo 300 caracteres!'
    const laporan = `*「 REPORT 」*\nNumero : wa.me/${m.sender.split`@`[0]}\nMensaje : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️El reporte fue enviado al programador del bot! los reportes fake seran baneados. (para los mods, los baneos sin pruebas, seran considerados falta, y seran removidos de Staff y se cosiderara su baneo.)')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
