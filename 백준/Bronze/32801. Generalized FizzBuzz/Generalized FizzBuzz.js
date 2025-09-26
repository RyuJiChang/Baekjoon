const [n,a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let a1 = 0
let b1 = 0
let ab = 0

for(let i = 1 ; i <= n ; i++){
    if(i % a == 0 && i % b == 0){
        ab++
    }
    else if(i % a == 0){
        a1++
    }
    else if(i % b == 0){
        b1++
    }
}

console.log(a1,b1,ab)