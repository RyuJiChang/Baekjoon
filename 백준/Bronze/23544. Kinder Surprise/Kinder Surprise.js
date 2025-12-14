const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {}

for(let i = 1 ; i < input.length ; i++){
    if(map[input[i]]){
        continue
    }
    else{
        map[input[i]] = 1
    }
}
console.log(Number(input[0]) - Object.values(map).length)