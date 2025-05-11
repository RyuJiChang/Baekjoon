const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let a = 100 - x
let b = 100 - y
let c = 100 - a - b
let d = a * b
let q = Math.floor(d/100)
let r = d % 100
    
console.log(a, b, c, d, q, r)
console.log(c+q, r)