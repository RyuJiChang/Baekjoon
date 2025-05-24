const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const digit = {'a' : 10, 'b' : 11, 'c' : 12, 'd' : 13, 'e' : 14, 'f' : 15, 'g' : 16}
const [before, after] = input[0]
const length = input[1][0]
const list = input[2]
let sum = 0
for(let i = 0 ; i < length ; i++){
    sum += list[i]* before ** (length - i-1)
}

console.log(sum.toString(after).split('').map(el => digit[el] ? digit[el] : el).join(' '))