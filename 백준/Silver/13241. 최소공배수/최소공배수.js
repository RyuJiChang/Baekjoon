let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let x = a
let y = b
while(x%y){
    let z = y
    y = x%y
    x = z
}
console.log(a*b/y)