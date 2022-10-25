let handler = async m => m.reply(`
👑 *PREMIUM*

Para saber mas escribe !premium

Con este rango obtendrás los siguientes beneficios que te harán destacar sobre los demás.

- Leaf infinitos SI
- Podras utilizar comandos PREMIUM si (algunos son comandos beta)
- Claimeo de 2k XP al día NO
- Confesiones infinitas FUTURO
- Xp infinito NO
- Tus Leaf no se gastan en comandos SI
- Prioridad en soporte SI
- Podras tener tu propio bot
- Y mucho más!

Escribe !creador y hablame por premium..
`.trim()) // Tambah sendiri kalo mau
handler.help = ['!vip']
handler.tags = ['info']
handler.command = /^(vip|prem|beneficios)$/i
handler.register = true

module.exports = handler
