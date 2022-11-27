const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start =  async () => {
try {
    const first =  await readFile('./first.txt', 'utf8')
    const second =  await readFile('./second.txt', 'utf8')
    await writeFile( '.join.txt', `file: ${first} ${second}`)
    console.log(first, second)
}
catch (error){
    console.log(error)
}
}

start()
