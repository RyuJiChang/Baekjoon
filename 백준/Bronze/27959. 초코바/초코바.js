const [coin, price] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(coin * 100 >= price ? 'Yes' : 'No')