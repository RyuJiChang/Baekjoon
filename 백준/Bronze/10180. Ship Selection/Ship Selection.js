const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 1 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}
let a = input[1][0]
let b = input[1][1]
let n = 2
let result,q,w,e,m
let nothing = 0
for(let i = 0 ; i < Number(input[0]) ; i++){
    result = 0
    for(let j = n ; j < n+a ; j++){
        [q,w,e] = input[j]
        if(b <= q*w/e){
            result++
        }
    }
    console.log(result)
    m = n+a
    if(!input[m]){
        break
    }
    a = input[m][0]
    b = input[m][1]
    n = m+1
}