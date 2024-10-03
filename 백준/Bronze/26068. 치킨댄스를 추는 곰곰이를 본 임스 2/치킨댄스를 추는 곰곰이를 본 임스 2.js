const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.slice(2)).map(Number)
let count = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i] <= 90){
        count++
    }
}

console.log(count)