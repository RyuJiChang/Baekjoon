const [[a,b],[c,d]] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const firstPrice = a / b
const secondPrice = (c**2) * Math.PI / d
console.log(firstPrice < secondPrice ? 'Whole pizza' : 'Slice of pizza')