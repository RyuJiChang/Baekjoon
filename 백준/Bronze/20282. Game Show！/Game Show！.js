const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let now = 100
let max = 100

for(let i = 1 ; i < input.length ; i++){
    now += input[i]
    max = Math.max(max, now)
}

console.log(max)