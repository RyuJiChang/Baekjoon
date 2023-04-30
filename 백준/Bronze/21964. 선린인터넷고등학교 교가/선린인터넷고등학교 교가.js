const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let lastFive = ''
for(let i = input[1].length-5 ; i < input[1].length ; i++){
    lastFive = lastFive + input[1][i]
}

console.log(lastFive)