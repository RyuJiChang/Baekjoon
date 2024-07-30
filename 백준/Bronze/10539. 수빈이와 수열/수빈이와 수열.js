const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))[1]
const result = []
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    const x = (input[i] * (i + 1)) - sum
    result.push(x)
    sum += x
}

console.log(result.join(' '))