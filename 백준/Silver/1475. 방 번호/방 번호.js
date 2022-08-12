const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number)
let obj = {}
let max = 0
for(let i  = 0 ; i <= 9 ; i++){
    obj[i] = 0
}

for(let i = 0 ; i < input.length ; i++){
    obj[input[i]]++
}
obj[6] = Math.round((obj[6]+ obj[9])/2)
obj[9] = 0
for(let key in obj){
    if(obj[key] > max){
        max = obj[key]
    }
}
console.log(max)