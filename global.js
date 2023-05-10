// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
const john="john"
const sanjay="sanjay"
const names=(name1)=>{
console.log(`hi ${name1}`)
}
names('susan')
names('john')
names('sanjay')