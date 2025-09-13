const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

input.shift()

const max = Math.max(...input)
const min = Math.min(...input)

if(input[0] == max){
    console.log('hard')
}
else if(input[0] == min){
    console.log('ez')
}
else{
    console.log('?')
}