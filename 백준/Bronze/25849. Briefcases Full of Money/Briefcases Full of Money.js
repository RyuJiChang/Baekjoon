const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const currency = [1, 5, 10, 20, 50, 100]

let max = 0
let now = 0

for(let i = 0 ; i < input.length ; i++){
    const prize = currency[i] * input[i]
    if(max <= prize){
        now = currency[i]
        max = prize
    }
}

console.log(now)