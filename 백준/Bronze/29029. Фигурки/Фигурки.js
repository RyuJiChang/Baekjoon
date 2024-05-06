const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const countMap = {}

for(let i = 0 ; i < input.length ; i++){
    if(countMap[input[i]] != null){
        countMap[input[i]]++
    }
    else{
        countMap[input[i]] = 1
    }
}

console.log(input.length - Math.max(...Object.values(countMap)))
