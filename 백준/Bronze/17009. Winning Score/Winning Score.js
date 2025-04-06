const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const sumA = input[0] * 3 + input[1] * 2 + input[2]
const sumB = input[3] * 3 + input[4] * 2 + input[5]

if(sumA > sumB){
    console.log('A')
}
else if(sumB > sumA){
    console.log('B')
}
else{
    console.log('T')
}