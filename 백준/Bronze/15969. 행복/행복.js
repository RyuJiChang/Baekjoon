const input = require('fs').readFileSync(0, 'utf8').toString().trim().split('\n')[1].split(' ').map(Number).sort((a,b) => a-b)
console.log(input[input.length - 1] - input[0])