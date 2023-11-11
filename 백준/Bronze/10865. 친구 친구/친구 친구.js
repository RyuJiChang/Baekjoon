const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = new Array(input[0][0]).fill(0)

for(let i = 1 ; i < input.length ; i++){
    result[input[i][0]-1]++
    result[input[i][1]-1]++
}

console.log(result.join('\n'))