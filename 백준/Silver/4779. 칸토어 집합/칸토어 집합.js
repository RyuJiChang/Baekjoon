const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

function mul3(num){
    let n = 1
    for(let i = 0 ; i < num ; i++){
        n *= 3
    }
    return n
}

function makeZero(n){
    let str = ''
    for(let i = 0 ; i < n ; i++){
    str += ' '
    }
    return str
}

function cal(n){
    if(n === 1){
        return '-'
    }
    return `${cal(n/3)}${makeZero(n/3)}${cal(n/3)}`
}

for(let i = 0 ; i < input.length ; i++){
console.log(cal(mul3(input[i])))
}