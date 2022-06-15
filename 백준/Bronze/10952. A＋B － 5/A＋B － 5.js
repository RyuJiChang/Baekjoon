const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let b, c
for(i = 0 ; i < input.length-1 ; i++){
     b = input[i].split(' ')
     c = Number(b[0]) + Number(b[1])
    console.log(c)
}
    