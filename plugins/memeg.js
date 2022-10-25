const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let [t1, t2] = text.split `|`
  if (!t1) throw 'MeduS.A-bot | *MEME*\n\n No detecto el texto.'
  if (!t2) {
    t2 = t1
    t1 = ''
  }
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `MeduS.A-bot | *MEME*\n\nY la imagen?`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} rrrrrrt`
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1)}/${encodeURIComponent(t2)}.png`, {
    background: link
  }), 'meme.png', `MeduS.A-bot | *MEME*\n\n Aqui tienes la imagen`, m)
}
handler.help = ['meme'].map(v => v + '<texto|texto>')
handler.tags = ['tools']
handler.command = /^(meme)$/i

module.exports = handler
