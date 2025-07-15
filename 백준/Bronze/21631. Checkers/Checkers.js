const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt)

if(input[0] >= input[1]){
    console.log(String(input[1]))
}
else{
    console.log(String(input[0] + 1n))
}