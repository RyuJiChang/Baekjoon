const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const list = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

console.log((list.indexOf(input[0]) +''+ list.indexOf(input[1])) * 10 ** list.indexOf(input[2]))