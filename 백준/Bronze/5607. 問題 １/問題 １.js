const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let a = 0
let b = 0

for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    if(x > y){
        a += x+y
    }
    else if(y > x){
        b += x + y
    }
    else{
        a += x
        b += y
    }
}

console.log(`${a} ${b}`)