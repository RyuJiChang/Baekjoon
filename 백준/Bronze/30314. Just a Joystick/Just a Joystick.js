const input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0
for(let i = 0 ; i < input[1].length ; i++){
    const length = Math.abs(input[1][i].charCodeAt() - input[2][i].charCodeAt())
    count += Math.min(length, 26 - length)
}
console.log(count)