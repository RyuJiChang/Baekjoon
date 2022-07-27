const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split('').map(Number)
}
let n = input.length

function cal(x,y,n){
    let result = 0
    for(let i = x ; i < x+n ; i++){
        for(let j = y ; j < y+n ; j++){
            result += input[i][j]
        }
    }
    return result
}

function math(x,y,n) {
    if(n===1){
        return input[x][y]
    }
    else if(cal(x,y,n) === 0){
        return 0
    }
    else if(cal(x,y,n) === n*n){
        return 1
    }
    return `(${math(x,y,n/2)}${math(x,y+n/2,n/2)}${math(x+n/2,y,n/2)}${math(x+n/2,y+n/2,n/2)})`
}
let a = math(0,0,n)
console.log(a)