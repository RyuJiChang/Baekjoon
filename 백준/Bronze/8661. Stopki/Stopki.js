let [length, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number) 
let now = 1

while (length > 0) {
    if(now === 1){
        if(length < a){
            break
        }
        else{
            length -= a
            now = 0
        }
    }
    else{
        if(length < b){
            break
        }
        else{
            length -= b
            now = 1
        }
    }
}

console.log(now)
