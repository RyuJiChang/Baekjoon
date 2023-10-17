const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x1,y1,x2,y2] = input[0]
const [x3,y3,x4,y4] = input[1]

console.log(Math.max(Math.max(x1,x2,x3,x4) - Math.min(x1,x2,x3,x4), Math.max(y1,y2,y3,y4) - Math.min(y1,y2,y3,y4))**2)

