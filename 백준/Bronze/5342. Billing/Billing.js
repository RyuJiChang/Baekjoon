const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const priceBook = {Paper:57.99,
Printer:120.50,
Planners:31.25,
Binders:22.50,
Calendar:10.95,
Notebooks:11.20,
Ink:66.95}

let sum = 0

for(let i = 0 ; i < input.length-1 ; i++){
    sum += priceBook[input[i]]
}

console.log('$' + sum.toFixed(2))