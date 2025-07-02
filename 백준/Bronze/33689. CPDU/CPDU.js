const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i][0] == 'C'){
        result++
    }
}
console.log(result)