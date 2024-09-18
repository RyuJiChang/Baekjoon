const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [d1, m1, y1, day] = input[0].split(' ').map(Number)
const [d2, m2, y2] = input[1].split(' ').map(Number)

console.log(((y2 * 360 + m2 * 30 + d2) - (y1 * 360 + m1 * 30 + d1) + day - 1) % 7 + 1)