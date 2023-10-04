const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))[1]
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(i + 1 !== input[i]){
        count++
    }
}

console.log(count)