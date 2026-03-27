const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' : ').map(Number))
const [a,b,c] = input[0]
const [x,y,z] = input[1]
console.log((86400 + x * 3600 + y * 60 + z - a * 3600 - b * 60 - c)%86400)