const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log(input*(input+1)*(input+2)/2)
