const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let max = 0
let now = 0

for(let i = 1 ; i < input.length ; i++){
    now += input[i][1] - input[i][0]
    max = Math.max(max, now)
}

console.log(max)