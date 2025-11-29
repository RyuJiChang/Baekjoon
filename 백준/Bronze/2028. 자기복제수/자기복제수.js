const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


for(let i = 1 ; i < input.length ; i++){
    console.log(String(input[i]**2).slice(input[i].length * -1) == input[i] ? 'YES' : 'NO')
}