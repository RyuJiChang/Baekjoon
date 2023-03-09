const a = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
for(let i = 1 ; i <= a[0] ; i++){
    console.log(' '.repeat(a[0]-i)+'*'.repeat(i))
}