const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const coupon = Math.floor(Math.min(20, input[0]) / 5)

if(coupon == 4){
    console.log(Math.max(Math.min(input[1] * 0.75, input[1] - 2000), 0))
}
else if(coupon == 3){
    console.log(Math.max(Math.min(input[1] * 0.9, input[1] - 2000), 0))
}
else if(coupon == 2){
    console.log(Math.max(Math.min(input[1] * 0.9, input[1] - 500), 0))
}
else if(coupon == 1){
    console.log(Math.max(input[1] - 500, 0))
}
else{
    console.log(input[1])
}