global.owner = ['5493546431050', '56935558580', '5493888629737', '56937489312'] // Put your number here
global.smod = ['573245902682', '50245893464'] // Want some help?
global.mods = ['573245902682', '5493546431050', '50375337360', '5491140945882', '5491131916269', '50245893464', '5491133099333'] // Want some help?
global.prems = ['50582818291', '5219384054782', '5491131916269', '5493795022497', '573103071789', '50583318333'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
   xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
    'https://api.xteam.xyz': 'ad64a37776d78a12',
  'https://zahirr-web.herokuapp.com': 'zahirgans'
}

// Sticker WM
global.packname = 'GA DOMINA'
global.author = 'MeduS.A_BOT-v9 (Bot13)'

global.multiplier = 120 // The higher, The harder levelup 

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
