const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const map = {'M' : 'MatKor', 'W' : 'WiCys', 'C' : 'CyKor', 'A' : 'AlKor', '$' : '$clear'}

console.log(map[input])