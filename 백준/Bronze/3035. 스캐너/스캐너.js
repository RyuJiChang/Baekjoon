const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [sizeX, sizeY, y, x] = input.shift().split(' ').map(Number)
const result = []

for(let i = 0 ; i < input.length ; i++){
    let str = ''
    for(let j = 0 ; j < input[i].length ; j++){
        str += input[i][j].repeat(x)
    }

    for(let i = 0 ; i < y ; i++){
        result.push(str)
    }
}

console.log(result.join('\n'))