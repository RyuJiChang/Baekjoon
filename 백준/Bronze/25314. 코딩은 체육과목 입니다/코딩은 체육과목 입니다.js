const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log('long '.repeat(input/4) + 'int')