const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const a = input[0] * input[1]
const b = input[2] * input[3]

if(a > b){
    console.log('M')
}
else if(a == b){
    console.log('E')
}
else{
    console.log('P')
}