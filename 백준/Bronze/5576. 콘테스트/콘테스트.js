const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const arr1 = input.slice(0,10).sort((a,b) => b - a)
const arr2 = input.slice(10).sort((a,b) => b - a)

console.log(arr1[0] + arr1[1] + arr1[2], arr2[0] + arr2[1] + arr2[2])