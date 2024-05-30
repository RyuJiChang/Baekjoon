const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a,b) => a-b)
console.log((input[0]+input[1]+input[2]+input[3]+input[4])/5)
console.log(input[2])