const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
let zero = 0
let one = 0
let minus = 0
for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].split(' ').map(Number)
}

function add(a,b,n) {
let result = arr[a][b]
    for(let i = a ; i < a+n ; i++){
        for(let j = b ; j < b+n ; j++){
            if(arr[i][j] !== result){
                return 3
            }
        }
    }
    return result
}

function cal(a,b,n) {
    if(n<1){
        return
    }
    if(add(a,b,n) === 1){
        one += 1
        return
    }
    else if(add(a,b,n) === 0){
        zero += 1
        return
    }
    else if(add(a,b,n) === -1){
        minus += 1
        return
    }
    else{
        cal(a,b,n/3)
        cal(a,b+n/3,n/3)
        cal(a,b+2*n/3,n/3)
        cal(a+n/3,b,n/3)
        cal(a+n/3,b+n/3,n/3)
        cal(a+n/3,b+2*n/3,n/3)
        cal(a+2*n/3,b,n/3)
        cal(a+2*n/3,b+n/3,n/3)
        cal(a+2*n/3,b+2*n/3,n/3)
    }
}
cal(0,0,arr.length)
console.log(minus)
console.log(zero)
console.log(one)