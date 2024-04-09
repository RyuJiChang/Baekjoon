const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 0

for(let i = 0 ; i < input[1].length ; i++){
    result += input[1][i]
    if(input[3].includes(result)){
        result = 0
    }
}

console.log(result)