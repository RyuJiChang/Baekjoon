const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let result = ''
for(let i = input ; i >= 1 ; i--){
    result += '\n' + i
}
console.log(result.trim())