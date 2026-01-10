const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const price = (input* 0.01 + 25).toFixed(2)

if(price > 100){
    console.log(Math.min(2000, price).toFixed(2))
}
else{
    console.log(Math.max(100,price).toFixed(2))
}