const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
for(let i = 0 ; i < input.length-1 ; i++){
    console.log(`${input[i]} => ${input[i]**2 - input[i] +1}`)
}