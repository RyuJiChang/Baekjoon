const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const sum = a + b + c
const max = Math.max(a, b, c)

if(sum - max > max){
    console.log(1)
    console.log(`${(sum/2 - c).toFixed(1)} ${(sum/2 - b).toFixed(1)} ${(sum/2 - a).toFixed(1)}`)
}
else(
    console.log(-1)
)