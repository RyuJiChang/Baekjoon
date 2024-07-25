const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let min = 200

for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i]
    min = Math.min(min, x+y)
}

console.log(min)