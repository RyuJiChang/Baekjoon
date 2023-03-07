const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let a =input[0]
let result = 1
for(let i=1 ; i<=a ; i++){
    result *= i
}
console.log(result)

