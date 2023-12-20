const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [t, p] = input[2]
let count = 0

for(let i = 0 ; i < input[1].length ; i++){
    count += Math.ceil(input[1][i]/t)
}
console.log(count)
console.log(Math.floor(input[0][0] / p), input[0][0] % p)