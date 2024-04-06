const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(Math.floor((input/2)**2))