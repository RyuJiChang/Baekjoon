const [c, k, p] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let sum = 0

for(let i = 1 ; i <= c ; i++){
    sum += i * (i * p + k)
}

console.log(sum)