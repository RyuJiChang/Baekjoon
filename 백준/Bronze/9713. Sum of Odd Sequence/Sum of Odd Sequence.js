const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
for(let i = 1 ; i < input.length ; i++){
    console.log(Math.ceil(input[i]/2)**2)
}