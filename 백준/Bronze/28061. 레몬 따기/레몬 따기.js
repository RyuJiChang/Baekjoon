const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let max = 0

for(let i = input[0][0] ; i > 0 ; i--){
    max = Math.max(max, input[1][input[0][0]-i] - i)
}

console.log(max)