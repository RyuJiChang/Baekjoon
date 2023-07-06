const [price, amount, money] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(money >= price * amount ? 0 : price * amount - money)