const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number).sort((a,b) => a-b).map(String).map(BigInt))

console.log(String(input[0][0] * input[1][0] + input[0][1] * input[1][1] + input[0][2] * input[1][2]))