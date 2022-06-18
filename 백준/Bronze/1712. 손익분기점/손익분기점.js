const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let a =input[0]
let b =input[1]
let c =input[2]
let result = -1
if(c>b){
    result = Math.floor((a/(c-b))+1)
}
console.log(result)