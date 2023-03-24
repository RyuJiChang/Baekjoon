const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const target = input + 'ILOVEYONSEI'
let result = 0

for(let i = 0 ; i < target.length-1 ; i++){
    result += Math.abs(target[i+1].charCodeAt() - target[i].charCodeAt())
}

console.log(result)