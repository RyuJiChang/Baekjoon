const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
let zero = 0
let one = 0

for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].split(' ').map(Number)
}

function add(a,b,n) {
    let result = 0
    for(let i = a ; i < a+n ; i++){
        for(let j = b ; j < b+n ; j++){
        result += arr[i][j]
        }
    }
    return result
}

function cal(a,b,n) {
    if(n<1){
        return
    }
    if(add(a,b,n) === n*n){
        one += 1
        return
    }
    else if(add(a,b,n) === 0){
        zero += 1
        return
    }
    else{
        cal(a,b,n/2)
        cal(a+n/2,b,n/2)
        cal(a,b+n/2,n/2)
        cal(a+n/2,b+n/2,n/2)
    }
}
cal(0,0,arr.length)

console.log(zero)
console.log(one)