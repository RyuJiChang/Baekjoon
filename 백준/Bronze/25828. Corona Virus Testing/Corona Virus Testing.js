const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const x = a * b
const y  = a + b * c
if(x > y){
    console.log(2)
}
else if(x < y){
    console.log(1)
}
else{
    console.log(0)
}