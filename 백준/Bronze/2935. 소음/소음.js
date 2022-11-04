let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

if(input[1] === '+'){
    console.log(String(BigInt(input[0])+BigInt(input[2])))
}
else{
    console.log(String(BigInt(input[0])*BigInt(input[2])))
}