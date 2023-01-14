const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let priceSum = 0
for(let i = 1 ; i < input.length ; i++){
    let [left, need, price] = input[i].split(' ').map(Number)
    priceSum += Math.max(0,(need-left)*price)
}
console.log(priceSum)