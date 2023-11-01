const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let num = 1

for(let i = 0 ; i < 4 ; i++){
    if(input[0][i] != input[1][i]){
        num *= 2
    }
}

console.log(num)