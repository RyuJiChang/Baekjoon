const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el[0]).sort().join('')
console.log(input == 'klp' ? 'GLOBAL' : 'PONIX')