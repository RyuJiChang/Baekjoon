const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const num = input[0] / input[1]

if(num < 0.2){
    console.log('weak')
}
else if(num < 0.4){
    console.log('normal')
}
else if(num < 0.6){
    console.log('strong')
}
else{
    console.log('very strong')
}