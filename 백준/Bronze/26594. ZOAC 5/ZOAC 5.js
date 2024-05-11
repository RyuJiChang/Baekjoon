const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let count = 1

for(let i = 1 ; i < input.length ; i++){
    if(input[i] == input[0]){
        count++
    }
}

console.log(count)