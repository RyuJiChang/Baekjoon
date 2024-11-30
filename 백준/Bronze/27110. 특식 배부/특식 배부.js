const [[chiken], [a,b,c]] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

console.log(Math.min(chiken, a) + Math.min(chiken, b) + Math.min(chiken, c))