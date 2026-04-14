const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ')
const map = {}

for(let i = 0 ; i < input.length ; i++){
    map[input[i]] = true
}

console.log(Object.keys(map).sort((a,b) => a-b).join('\n'))