const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
if(input[1].length == 7){
    console.log(input[2] % 2 ? input[2] : input[2] - 1)
}
else{
    console.log(input[2] % 2 ? (input[2] > 1 ? input[2] - 1 : 2) : input[2])
}