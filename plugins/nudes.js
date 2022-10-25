const { MessageType } = require('@adiwajshing/baileys')

const fetch = require('node-fetch')

let handler = async (m, { conn }) => {

    try {

        let res = await fetch('https://meme-api.herokuapp.com/gimme/nudes')

  resp = await res.json() 

   conn.sendMessage(m.chat, resp,MessageType.image, {

            quoted: m, caption: `Titulo de la imagen: ${resp.title}\n*Â©MeduS.A-bot*`

        })

    } catch (e) {

        console.log(e)

        throw '_*MENSAJE DE catch (e) console.log(e)*_'

    }

}

//handler.help = ['nudes (pack de chicas 3D)']

//handler.tags = ['premium']

handler.command = /^(nudesold)$/i

handler.premium = false

handler.limit = true

module.exports = handler