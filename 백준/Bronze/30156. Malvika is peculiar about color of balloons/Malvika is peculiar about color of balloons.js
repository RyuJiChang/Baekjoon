const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const a = input[i].split('').filter(el => el == 'a').length
    console.log(Math.min(a, input[i].length - a))
}