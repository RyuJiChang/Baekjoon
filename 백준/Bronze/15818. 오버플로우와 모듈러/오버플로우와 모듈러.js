const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(BigInt))
let result = 1n

for(let i = 0 ; i < input[1].length ; i++){
    result = (result * input[1][i]) % input[0][1]   
}

console.log(String(result))