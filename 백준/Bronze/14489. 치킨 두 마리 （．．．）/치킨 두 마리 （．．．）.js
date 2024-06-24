const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
if(input[0][0] + input[0][1] >= input[1][0] * 2){
    console.log(input[0][0] + input[0][1] - input[1][0] * 2)
}
else{
    console.log(input[0][0] + input[0][1])
}