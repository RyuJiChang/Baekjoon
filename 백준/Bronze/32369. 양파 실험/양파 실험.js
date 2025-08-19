const [day, A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let a = 1
let b = 1

for(let i = 0 ; i < day ; i++){
    a += A
    b += B
    if(a < b){
        let temp = b
        b = a
        a = temp
    }
    else if(a == b){
        b--
    }
}

console.log(a,b)