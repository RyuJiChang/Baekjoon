let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let count = 0

while(a > 0){
    count += a
    a = Math.floor(a/b)
}

console.log(count)