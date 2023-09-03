const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a,b) => (a-b))
const result = Math.max(0,Math.min(9,Math.min(a+b - 9, a)))

console.log(`There ${result === 1 ? 'is' : 'are'} ${result} ${result === 1 ? 'way' : 'ways'} to get the sum 10.`)
