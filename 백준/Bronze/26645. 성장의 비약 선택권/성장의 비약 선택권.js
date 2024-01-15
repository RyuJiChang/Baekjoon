const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const a = Math.min(210,input + 8)
const b = Math.min(220,input + 4)
const c = Math.min(230,input + 2)
const d = input + 1
const max = Math.max(a,b,c,d)
let result = 1
if(max == d){
   result = 4 
}
else if(max == c){
    result = 3
}
else if(max == b){
    result = 2
}
console.log(result)