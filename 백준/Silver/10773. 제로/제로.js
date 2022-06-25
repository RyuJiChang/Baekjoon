const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)
let result = []
let acc = 0
for(let i = 1 ; i <= input[0] ; i++){
    if(result.length && input[i] === 0){
        result.pop()
    }
    if(input[i]){
        result.push(input[i])
    }
}
for(let i = 0 ; i < result.length ; i++){
    acc += result[i]
}
console.log(acc)