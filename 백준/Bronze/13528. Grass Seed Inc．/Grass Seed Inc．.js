const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))


let sum = 0
for(let i = 2 ; i < input.length ; i++){
    const [a,b] = input[i]
    sum += a * b
}

console.log(sum * input[0][0])