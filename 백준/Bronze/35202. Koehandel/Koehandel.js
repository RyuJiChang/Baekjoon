const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if(input[0] > input[1]){
    console.log(0)
}
else{
    console.log(Math.min(input[0] + 1, input[1]))
}