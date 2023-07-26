const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log(input < 4 ? 0 : (input-1)*(input-2)*(input-3)/3/2)