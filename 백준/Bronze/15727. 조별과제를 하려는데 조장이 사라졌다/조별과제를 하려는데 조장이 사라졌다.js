const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(Math.ceil(input/5))