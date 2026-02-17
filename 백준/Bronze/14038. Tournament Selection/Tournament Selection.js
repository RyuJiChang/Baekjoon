const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const point = input.filter(el => el == 'W').length

if(point > 4){
    console.log(1)
}
else if(point > 2){
    console.log(2)
}
else if(point > 0){
    console.log(3)
}
else{
    console.log(-1)
}
