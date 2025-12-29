const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
for(let i = 1 ; i < input.length ; i++){
    console.log(`Case #${i}: ${input[i].reverse().join(' ')}`)
}