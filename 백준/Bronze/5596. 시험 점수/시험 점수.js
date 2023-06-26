const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let max = 0

for(let i = 0 ; i < input.length ; i++){
    const [a,b,c,d] = input[i].split(' ').map(Number)
    max = Math.max(max, a+b+c+d)
}

console.log(max)