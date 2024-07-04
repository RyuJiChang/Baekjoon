const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const arr = [...input.slice(-3), ...input]
let max = 0

for(let i = 0 ; i < 8 ; i++){
    max = Math.max(max, arr[i] + arr[i+1] + arr[i+2] + arr[i+3])
}

console.log(max)