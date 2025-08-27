const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let min = Infinity

for(let i = 1 ; i < input.length ; i++){
    const [a,b,c] = input[i]
    min = Math.min(min, a + b + (c * input[0][1]))
}

console.log(min)