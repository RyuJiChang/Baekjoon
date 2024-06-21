const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if(input[0] >= 12 && input[0] <= 16 && input[1] == 0){
    console.log(320)
}
else{
    console.log(280)
}