const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = input[0][0] ; i < input[0][1] ; i++){
    result[i] = 1
}

for(let i = input[1][0] ; i < input[1][1] ; i++){
    result[i] = 1
}

console.log(result.filter(el => el == 1).length)