const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let left = a + b
let result = 0

while(left >= c){
    const count = Math.floor(left / c)
    left = left % c + count
    result += count
}

console.log(result)
