const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [a, b] = input[0]
const [k, x] = input[1]
const num = Math.min(b,k+x) - Math.max(a,k-x) 
const result = Math.max(num + 1 , 0)
console.log(result == 0 ? 'IMPOSSIBLE' : result)