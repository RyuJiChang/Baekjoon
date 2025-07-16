const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const apple = input[0] * 7
const pear = input[1] * 13

if(apple > pear){
    console.log('Axel')
}
else if(apple < pear){
    console.log('Petra')
}
else{
    console.log('lika')
}