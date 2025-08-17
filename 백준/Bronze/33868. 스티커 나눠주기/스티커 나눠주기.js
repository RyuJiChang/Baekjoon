const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let[a,b] = [0,5000]

for(let i = 1 ; i < input.length ; i++){
    a = Math.max(a, input[i][0])
    b = Math.min(b, input[i][1])
}

console.log((a*b) % 7 + 1)