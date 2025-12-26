const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let sum = 0
let noView = 0

for(let i = 0 ; i < input[0][0] ; i++){
    if(!input[2][i]){
        noView += input[1][i]
    }
    sum += input[1][i]
}

console.log(sum)
console.log(noView)