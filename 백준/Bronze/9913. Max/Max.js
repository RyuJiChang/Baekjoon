const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {}

let max = 0

for(let i = 1 ; i < input.length ; i++){
    if(map[input[i]]){
        map[input[i]]++
    }
    else{
        map[input[i]] = 1
    }
    max = Math.max(max, map[input[i]])
}

console.log(max)