const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let sortedArr = input.slice(1).sort()
let targetIndex = input[0].split(' ').map(Number)[1]
console.log(sortedArr[targetIndex-1])