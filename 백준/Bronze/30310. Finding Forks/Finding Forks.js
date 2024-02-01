const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input[1].split(' ').map(Number).sort((a,b) => a-b)

console.log(arr[0] + arr[1])