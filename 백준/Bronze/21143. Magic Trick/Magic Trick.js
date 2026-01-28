const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const map = {}
let result = 1

for(let i = 0 ; i < input.length ; i++){
    if(map[input[i]]){
        map[input[i]]++
    }
    else{
        map[input[i]]= 1
    }
}

for(let key in map){
    if(map[key] > 1){
        result = 0
        break
    }
}

console.log(result)