const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

const result = input.reduce((a,b) => a + b)
const lastValue = Math.max(...input)
    
console.log(result - lastValue)