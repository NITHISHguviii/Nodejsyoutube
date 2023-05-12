const { readFile, writeFile } = require('fs').promises
 const util = require('util')
const readFilePromise = util.promisify(readFile)
 const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('first.txt', 'utf8')
   // const second = await readFile('./content/second.txt', 'utf8')
   await writeFile(
    'first.txt',
    `THIS IS AWESOME : ${first} `,
   
  )
  console.log(first)
    console.log(first)
  } catch (error) {
    console.log(error)
  }
}

start()