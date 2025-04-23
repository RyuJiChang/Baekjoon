const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(Math.floor(input[i][0] * input[i][1] / 2))
}

console.log(result.join('\n'))