const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


console.log(((input[0] / input[1]) / input[2]) > 1 ? 'no' : 'yes')