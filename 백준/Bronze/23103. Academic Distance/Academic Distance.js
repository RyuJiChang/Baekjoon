const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let [x,y] = input[1]
let result = 0

for(let i = 2 ; i < input.length ; i++){
    const [x2,y2] = input[i]
    result += Math.abs(x2 - x) + Math.abs(y2 - y)
    x = x2
    y = y2
}

console.log(result)