const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = [1,1,2,6,4]

console.log(input <= 4 ? result[input] : 0)