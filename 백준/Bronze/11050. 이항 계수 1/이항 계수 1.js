const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let a =input[0]
let b =input[1]
function factorial(n){
 let result = 1    
 for(let i = 1 ; i <= n ; i++){
     result *= i
 } 
    return result
}
console.log(factorial(a)/factorial(b)/factorial(a-b))