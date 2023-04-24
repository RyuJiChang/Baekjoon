const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let sum = 0

for(let i = 0 ; i < input[1].length ; i++){
    sum += Math.round(input[1][i]/2)
}

console.log(sum >= input[0][0] ? 'YES' : 'NO')