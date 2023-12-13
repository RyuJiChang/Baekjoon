const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const maps = {}
for(let i = 1 ; i < input.length ; i++){
    maps[input[i]] = 1
}

console.log(Object.keys(maps).length)