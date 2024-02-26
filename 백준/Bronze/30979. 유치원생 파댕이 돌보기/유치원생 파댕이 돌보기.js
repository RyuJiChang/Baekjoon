const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const cutline = Number(input[0])
const arr = input[2].split(' ').map(Number)
let sum = 0
for(let i = 0 ; i < arr.length ; i++){
    sum += arr[i]
}

console.log('Padaeng_i ' + (sum >= cutline ? 'Happy' : 'Cry'))