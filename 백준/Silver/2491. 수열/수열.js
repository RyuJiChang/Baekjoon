const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let max = 1
let nowM = 1
let low = 1
let nowL = 1

for(let i = 0 ; i < input.length-1 ; i++){
    if(input[i] <= input[i+1]){
        nowM++
        max = Math.max(max, nowM)
    }
    else{
        max = Math.max(max, nowM)
        nowM = 1
    }
}
for(let i = 0 ; i < input.length-1 ; i++){
    if(input[i] >= input[i+1]){
        nowL++
        low = Math.max(low, nowL)
    }
    else{
        low = Math.max(low, nowL)
        nowL = 1
    }    
}
console.log(Math.max(max,low))