const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)
let n = Math.pow(2,input[0])
let a = input[1]
let b = input[2]
let result = 0

function check(n,a,b) {
    if(n === 1){
        return
    }
    if(a >= n/2){
        if(b >= n/2){
            result += 3*n*n/4
            check(n/2,a-(n/2),b-(n/2))
        }
        else{
            result += 2*n*n/4
            check(n/2,a-(n/2),b)

        }
    }
    else{
        if(b >= n/2){
            result += n*n/4
            check(n/2,a,b-(n/2))
        }
        else{
            check(n/2,a,b)
        }
    }
}
check(n,a,b)

console.log(result)