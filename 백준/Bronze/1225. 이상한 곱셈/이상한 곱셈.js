const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

let num1 = 0
let num2 = 0

for(let i = 0 ; i < input[0].length ; i++){
    num1 += Number(input[0][i])
}
for(let i = 0 ; i < input[1].length ; i++){
    num2 += Number(input[1][i])
}

console.log(num1*num2)