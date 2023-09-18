const fs = require('fs')
// const primero = fs.readFileSync('./data/nombres.txt')
// console.log(primero.toString()) 
// const title = 'esto es nuevo contenido'
// fs.writeFileSync('./data/third.txt', title, {
//     flag: 'a'
// })

fs.readFile('./data/nombres.txt', function(error, data) {
    if(error) {
        console.log(error)
    }
    console.log(data.toString())
})