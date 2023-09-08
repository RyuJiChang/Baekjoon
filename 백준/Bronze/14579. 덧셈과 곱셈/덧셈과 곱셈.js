const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let result = 1
for(let i = a ; i <= b ; i++){
    result = (((i*(i+1)/2)%14579) * result)%14579
}

console.log(result)