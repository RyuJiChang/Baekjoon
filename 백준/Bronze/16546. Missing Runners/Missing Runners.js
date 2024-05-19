const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ')
const map = {}

for(let i = 1 ; i <= input.length + 1 ; i++){
    map[i] = 1
}

for(let i = 0 ; i < input.length ; i++){
    map[input[i]] = 0
}

for(let key in map){
    if(map[key]){
        console.log(key)
        break
    }
}