const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let a = ''
for(i = 0 ; i < input[0] ; i++){
    a = a+ '*'
    console.log(a)
}
