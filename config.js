global.owner = ['5493704583368'] // Put your number here
global.smod = [''] // Want some help?
global.mods = [''] // Want some help?
global.prems = ['5493704583368'] // Premium user has unlimited limit
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
