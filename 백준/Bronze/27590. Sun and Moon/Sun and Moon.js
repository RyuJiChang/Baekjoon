const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const x = input[0][1]
const y = input[1][1]
let a = -input[0][0]
let b = -input[1][0]

while (a != b) {
    if(a < b){
        a += x
    }
    else{
        b += y
    }
}

console.log(a)