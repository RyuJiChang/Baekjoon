const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0

for(let i = 2 ; i < input.length ; i++){
    if(input[0] == input[i]){
        count++
    }
}

console.log(count)