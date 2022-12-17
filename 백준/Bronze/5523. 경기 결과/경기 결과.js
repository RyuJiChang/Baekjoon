let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let a = 0
let b = 0

for(let i = 1 ; i < input.length ; i++){
    let [aP,bP] = input[i].split(' ').map(Number)
    if(aP > bP){
        a++
    }
    else if(bP > aP){
        b++
    }
}
console.log(a,b)