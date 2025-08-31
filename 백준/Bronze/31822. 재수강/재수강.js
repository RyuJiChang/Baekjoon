const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.slice(0,5))
let count = 0

for(let i = 2 ; i < input.length ; i++){
    if(input[0] == input[i]){
        count++
    }
}

console.log(count)