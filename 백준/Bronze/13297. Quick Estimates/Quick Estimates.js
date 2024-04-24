const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 1 ; i < input.length ; i++){
    console.log(input[i].length)
}