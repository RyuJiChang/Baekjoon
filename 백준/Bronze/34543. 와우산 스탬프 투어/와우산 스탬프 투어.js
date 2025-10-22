const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let result = 0

if(input[0] == 5){
    result = 120
}
else if(input[0] >= 3){
    result = input[0]*10 + 20
}
else{
    result = input[0] * 10
}
if(input[1] > 1000){
    result -= 15
}

console.log(Math.max(0,result))