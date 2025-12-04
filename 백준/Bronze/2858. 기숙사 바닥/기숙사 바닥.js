const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const sum = (input[0] + 4) / 2
const multy = input[0] + input[1]

for(let i = 1 ; i < sum ; i++){
    if(i * (sum - i) == multy){
        console.log(Math.max(i, sum - i), Math.min(i, sum - i))
        break
    }
}