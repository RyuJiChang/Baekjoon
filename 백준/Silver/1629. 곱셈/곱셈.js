const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(BigInt)

function recurtion(a,n) {
    if(n === 1n){
        return a
    }

    if(n%2n === 0n){
        return recurtion((a*a)%c,n/2n)
    }
    else{
        return a * recurtion((a*a)%c,(n-1n)/2n)
    }
}

console.log(String(recurtion(a,b)%c))


