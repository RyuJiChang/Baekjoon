const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const [h1, m1, s1] = input[0]
const [h2, m2, s2] = input[1]
const [a,b,c] = input[2]
const total = m1*s1*a + s1*b + c

const h = (Math.floor(total / (m2 * s2))  % h2)
const m = (Math.floor((total % (m2 * s2)) / s2))
const s = ((total % (s2)))

console.log(h,m, s)