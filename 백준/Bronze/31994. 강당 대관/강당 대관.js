const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => {const [name, num] = el.split(' ') 
   return [name, Number(num)]})

console.log(input.sort((a,b) => b[1] - a[1])[0][0])