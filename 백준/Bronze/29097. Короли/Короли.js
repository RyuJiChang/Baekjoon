const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const a = input[0] * input[3]
const b = input[1] * input[4]
const c = input[2] * input[5]
const max = Math.max(a,b,c)
const result = []

if(a == max){
    result.push('Joffrey')
}
if(b == max){
    result.push('Robb')
}
if(c == max){
    result.push('Stannis')
}

console.log(result.join(' '))