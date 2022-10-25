const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
//if (!isGroup) return await client.reply(from, '_⛔ comando solo para grupos, Imbecil!_', id);
        if (mentionedJidList.length > 0 || arguments.length < 1) return await client.reply(from, '_⚠️ EJEMPLO DE USO:: !gay <Nombre>_', id);
        const gayPercentage = Math.floor(Math.random() * 100);
        await client.reply(from, `_👬🏻 El nivel de gay de *${arguments.join(' ')}* es en total ${gayPercentage}%_`, id);
}

handler.customPrefix = /^(!test9)$/i
handler.command = new RegExp
//handler.help = ['!yamete (yemete kudasaii >////<)']
//handler.tags = ['voces']

handler.fail = null
handler.exp = 0
handler.limit = false
handler.register = true

module.exports = handler