const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const checkObj = {}
const result = []
    
for(let i = 0 ; i < 31 ; i++){
    checkObj[2**i] = 1
}

for(let i = 1 ; i < input.length ; i++){
    result.push(checkObj[input[i]] ? 1 : 0)
}

console.log(result.join('\n'))