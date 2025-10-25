const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let min = Infinity

for(let i = 0 ; i < input[1].length -1 ; i++){
    min = Math.min(min, input[1][i] + input[1][i+1])
}

console.log(min * input[0][1])