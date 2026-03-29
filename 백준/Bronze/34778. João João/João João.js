const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const map = {}

for(let i = 0 ; i < input.length ; i++){
    map[input[i]] = 1
}

console.log(4 - Object.values(map).length)