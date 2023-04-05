const [day, grow, multyply, price] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.floor((day-1)/grow)*multyply*price)