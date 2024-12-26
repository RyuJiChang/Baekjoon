const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const list = ['N', 'E', 'S', 'W']
let sum = 0
for(let i = 0 ; i < input.length ; i++){
    sum += input[i]
}

console.log(list[sum%4])