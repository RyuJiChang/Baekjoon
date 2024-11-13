const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const digit = Number(input[1])
const beforeNum = input[0]
let num = 0
let count = 0
for(let i = beforeNum.length-1 ; i >= 0 ; i--){
    const digitNum = parseInt(beforeNum[i], digit)
    const digitSum = digitNum * (digit**count)
    num += digitSum
    count++
}
console.log(num)
