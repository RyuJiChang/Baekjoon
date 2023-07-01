const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let now = 0
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    if(now === input[i]){
        sum++
        now = (now + 1)%3
    }
}

console.log(sum)