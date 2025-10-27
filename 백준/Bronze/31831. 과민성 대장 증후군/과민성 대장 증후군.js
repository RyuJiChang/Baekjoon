const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let stress = 0
let result = 0

for(let i = 0 ; i < input[1].length ; i++){
    stress = Math.max(0, stress + input[1][i])
    if(stress >= input[0][1]){
        result++
    }
}

console.log(result)