const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)
let result = input[0]
for(let i = 1 ; i < input.length ; i++){
    result -= input[i]
}
console.log(result)