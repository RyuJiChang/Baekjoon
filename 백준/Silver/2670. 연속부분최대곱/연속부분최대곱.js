const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let maxNow = 1
let max = 0

for(let i = 0 ; i < input.length ; i++){
    maxNow = maxNow * input[i]
    max = Math.max(max, maxNow)
    if(maxNow < 1){
        maxNow = 1
    }
}
console.log((Math.round(max*1000)/1000).toFixed(3))