const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [a,b] = input.pop()
let count = 0
for(let i = 0 ; i < input[1].length ; i++){
    count += Math.max(0,Math.ceil((input[1][i]-a)/b)) + 1
}
console.log(count)