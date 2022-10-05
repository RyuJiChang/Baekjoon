let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = 0
for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result += a*b
}

console.log(result)