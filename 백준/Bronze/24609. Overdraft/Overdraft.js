const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let min = 0
let now = 0
for(let i = 1 ; i < input.length ; i++){
    now += input[i]
    min = Math.min(min, now)
}

console.log(min < 0 ? Math.abs(min) : 0)