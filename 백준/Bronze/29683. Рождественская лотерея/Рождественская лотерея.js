const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 0

for(let i = 0 ; i < input[1].length ; i++){
    result += Math.floor(input[1][i] / input[0][1])
}

console.log(result)