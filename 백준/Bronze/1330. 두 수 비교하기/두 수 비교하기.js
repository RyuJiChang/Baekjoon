const [a,b] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)

let result
if(a>b){
    result = '>'
}
else if(a===b){
    result = '=='
}
else if(a<b){
    result = '<'
}
console.log(result)