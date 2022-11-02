let [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let result = Math.floor(Math.min(a/2, b))
let left = Math.floor((a+b-c-result*3)/3)

if(left < 0){
    console.log(result+left)
}
else{
console.log(result)
}