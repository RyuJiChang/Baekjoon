const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let max
let maxNow
let arr = []
let result = []

let now = 0

while(input[now+1] !== undefined){
    arr.push(input.slice(now+1 , now + input[now]+1))
    now = now + input[now]+1
}

function cal(arr){
    max = arr[0]
    maxNow = arr[0]
    
    for(let i = 1 ; i < arr.length ; i++){
        if(maxNow < 0){
            maxNow = 0
        }
        
    maxNow = maxNow + arr[i]
    max = Math.max(max, maxNow)
    }
    
    result.push(max)
}

for(let i = 0 ; i < arr.length ; i++){
    cal(arr[i])
}

console.log(result.join('\n'))