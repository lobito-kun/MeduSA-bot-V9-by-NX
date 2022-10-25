let handler = async m => m.reply(`
Cuales son las ventajas de tener premium, o ser VIP?
Con este rango obtendrás los siguientes beneficios que te harán destacar sobre los demás!

- Puedes comprar premium con tus leaf! cuesta 180 leaf. por 1 semana (puedes pedirle a un staff,
o escribir !report comprar premium con leaf)

- Tus leaf restantes no se gastaran! comandos semi-premium ilimitados

- Ganaras 12.000 de XP! (25 leafs)

- se habitilan los comandos premium! imagenes HD, funciones nuevas! podrias hasta ganar 300 leaf, 
solo con invertir 180 leaf!

/////////////////////////////////////////////////////////////////

Tambien puedes comprar con dinero real, que tiene mas beneficios!

╭─「 Donar • PayPal, Mercado pago ARG 」
│ • Para el resto del mundo, Consulta al creador por planes: https://paypal.me/arris187
│ • Para argentina, Comandos premium: https://mpago.la/1jwzwP6
│ • Para Premium y poder tener tu propio bot: https://mpago.la/1mLrZnY
╰────

- Podras tener tu propio bot!!! con el dinero, Alquilas una parte del servidor, asi que tendras tu bot las 24/7(*)

- Tus Leaf nunca se acaban! (tendras Leaf infinitos...)

- Ganaras 100.000 de XP!
- Comandos Premium ilimitados! Tendras acceso a todos los comandos premium del bot

- Soporte rapido! Tendras a tu Servicio, el equipo de administracion del bot. Lo que tendras mas soporte que otros users

- Recuerda enviar una captura de tu pago al bot, De lo contrario, no tendras el beneficio...
(captura del pago realizado, Cuando se acredite el dinero tendras el plan que pagaste)

(*)La mantencion de tu bot, es pagando por mes. eso asegura que tengas tu propio bot en el numero que quieras, limite 1 bot por licencia.
(*)Al contratar el servicio por mes, Aceptas los terminos y condiciones del servicio, lo cuales estaran disponibles para leer cuando quieras.
(*)Tu propio bot, Sera una copia de MeduS.A-bot, Pero dependera de tu numero.
(*)Antes de pagar por paypal, debes hablar con el !creador para consultar precios.
(*)Los precios En arg, ya estan en los link de mercado pago.
(*)Descuentos y promociones para usuarios de argentina.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^quieropremium|premium$/i

module.exports = handler
