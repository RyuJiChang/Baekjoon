const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const check = 'CAMBRIDGE'
let result = ''

for(let i = 0 ; i < input.length ; i++){
    if(check.indexOf(input[i]) == -1){
        result += input[i]
    }
}

console.log(result)