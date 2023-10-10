const [price, multiply] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
if(multiply === 1){
    console.log(-1)
}
else{
    console.log(price + Math.ceil(price / (multiply -1)))
}