const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let a = input[0]
let b = input[1]
let arr = []
let result = []
for(let i = 1 ; i <= a ; i++){
    arr.push(i)
}
let n = b-1
while(arr.length>0){
    result.push(...arr.splice(n,1))
    n = (n+b-1)%arr.length
}
console.log(`<${result.join(', ')}>`)