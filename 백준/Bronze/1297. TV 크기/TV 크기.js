const [r,x,y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let multiply = r / Math.sqrt(x**2 + y**2)
console.log(Math.floor(x*multiply), Math.floor(y*multiply))