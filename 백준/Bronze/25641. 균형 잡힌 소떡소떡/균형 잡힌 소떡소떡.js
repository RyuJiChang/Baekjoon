const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split('')
let s = 0
let t = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] === 's'){
        s++
    }
    else if(input[i] === 't'){
        t++
    }
}
while (s != t) {
    if(input.shift() == 's'){
        s--
    }
    else{
        t--
    }
}
console.log(input.join(''))