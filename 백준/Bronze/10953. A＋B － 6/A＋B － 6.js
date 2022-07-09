const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 1 ; i < input.length ; i++){
    let a = input[i].split(',').map(Number)[0]
    let b = input[i].split(',').map(Number)[1]
    console.log(a+b)
}