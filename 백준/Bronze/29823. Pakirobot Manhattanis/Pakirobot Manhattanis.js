const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const map = {
    "N" : 0,
    "S" : 0,
    "W" : 0,
    "E" : 0
}

for(let i = 0 ; i < input.length ; i++){
    map[input[i]]++
}

console.log(Math.abs(map["N"] - map["S"]) + Math.abs(map["E"] - map["W"]))