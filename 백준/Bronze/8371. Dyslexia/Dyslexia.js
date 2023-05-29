const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0

for(let i = 0 ; i < input[1].length ; i++){
    if(input[1][i] !== input[2][i]){
        count++
    }
}

console.log(count)