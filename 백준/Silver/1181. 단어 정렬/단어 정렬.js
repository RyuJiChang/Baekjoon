let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let arr = input.slice(1,input.length).sort().sort((a,b) => a.length - b.length)
let result = [...new Set(arr)].join('\n')
console.log(result)