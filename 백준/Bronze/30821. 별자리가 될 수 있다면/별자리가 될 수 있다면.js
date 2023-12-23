const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(input*(input-1)*(input-2)*(input-3)*(input-4)/5/4/3/2)