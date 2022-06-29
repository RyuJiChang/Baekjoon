const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let num = Number(input[0])
let result = 0
for(let i = 1 ; i <= num ; i++){
    let [a,b] = input[i].split(' ').map(Number)
        
    result += a*b
}
console.log(result)