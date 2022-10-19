let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)

console.log(Math.floor((b-1)/4)-Math.floor((a-1)/4)+Math.abs((b-1)%4-(a-1)%4) )