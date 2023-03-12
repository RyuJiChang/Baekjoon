const [amount, average] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(amount*average - amount + 1)