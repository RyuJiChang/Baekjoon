const [n, m, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const result = ((m + k - 3) % n + n) % n
console.log(result == 0 ? n : result)