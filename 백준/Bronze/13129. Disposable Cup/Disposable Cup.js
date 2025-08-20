const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const result = []
let sum = a * c + b

for(let i = c ; i > 0 ; i--){
    result.push(sum)
    sum += b 
}

console.log(result.join(' '))