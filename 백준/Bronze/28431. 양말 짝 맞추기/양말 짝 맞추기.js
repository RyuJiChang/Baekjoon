const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {}

for(let i = 0 ; i < input.length ; i++){
    if(map[input[i]]){
        map[input[i]]++
    }
    else{
        map[input[i]] = 1
    }
}

for(key in map){
    if(map[key] % 2){
        console.log(key)
        break
    }
}