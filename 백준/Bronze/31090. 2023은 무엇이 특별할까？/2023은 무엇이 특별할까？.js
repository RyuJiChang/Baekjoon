const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    console.log((Number(input[i])+1) % input[i].slice(2) == 0 ? 'Good' : 'Bye') 
}