const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let count = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i] != '1'){
        count++
    }
}

console.log(count)