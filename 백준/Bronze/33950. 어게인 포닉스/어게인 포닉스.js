const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.replaceAll('PO','PHO'))

input.shift()

console.log(input.join('\n'))