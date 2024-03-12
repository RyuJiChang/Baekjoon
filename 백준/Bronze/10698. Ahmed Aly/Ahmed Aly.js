const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 1 ; i < input.length ; i++){
    const [calculate, result] = input[i].split('=')
    console.log(`Case ${i}: ${eval(calculate) == result ? 'YES' : 'NO'}`)
}