const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const mbtiObj = {E : "I", I : "E", S : "N", N : "S", T : "F", F : "T", J : "P", P : "J"}
let result = ''

for(let i = 0 ; i < input.length ; i++){
    result += mbtiObj[input[i]]
}

console.log(result)