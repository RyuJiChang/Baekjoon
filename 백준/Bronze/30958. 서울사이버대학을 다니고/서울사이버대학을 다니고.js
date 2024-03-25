const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const countMap = {}
let max = 0

for(let i = 0 ; i < input.length ; i++){
    const str = input[i]
    if(str == ' ' || str == ',' || str == '.'){}
    else{
        if(countMap[str]){
            countMap[str]++
        }
        else{
            countMap[str] = 1
        }
    }
}

for(let key in countMap){
    max = Math.max(max, countMap[key])
}

console.log(max)