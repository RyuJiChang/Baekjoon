const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = ['Either', 'Odd', 'Either', 'Even']
console.log(result[(input-1)%4])