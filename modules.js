const names = require('./04-names.js')
const sayHi = require('./05-utils.js')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade') // why we are not storing in variable means because:if we are using function in file it our's wish to store the file in variable..
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
console.log(data)