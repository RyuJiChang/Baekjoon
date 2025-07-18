const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const map = {"Poblano" : 1500,
"Mirasol" : 6000,
"Serrano" : 15500,
"Cayenne" : 40000,
"Thai" : 75000,
"Habanero" : 125000}

let sum = 0

for(let i = 1 ; i < input.length ; i++){
    sum += map[input[i]]
}

console.log(sum)