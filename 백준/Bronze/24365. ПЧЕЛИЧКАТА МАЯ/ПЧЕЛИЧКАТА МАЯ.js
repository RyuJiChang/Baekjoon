const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const ave = (a+b+c)/3

if(b >= ave){
    console.log(c * 2 + b - ave * 3)
}
else{
    console.log(ave * 3 - b - a * 2)
}