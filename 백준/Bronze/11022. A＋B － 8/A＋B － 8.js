const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let a =Number(input[0])
let b, c
for(i = 1 ; i <= a ; i++){
     b = input[i].split(' ')
     c = Number(b[0]) + Number(b[1])
    console.log(`Case #${i}: ${Number(b[0])} + ${Number(b[1])} = ${c}`)
}