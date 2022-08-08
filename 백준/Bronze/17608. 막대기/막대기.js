const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = 0
let max = 0
for(let i = input[0] ; i > 0 ; i--){
    if(input[i] > max){
        max = input[i]
        result ++
    }
}
console.log(result)