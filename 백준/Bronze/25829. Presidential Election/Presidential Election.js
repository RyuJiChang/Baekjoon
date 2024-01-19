const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let sum1 = 0
let sum2 = 0
let count1 = 0
let count2 = 0

for(let i = 1 ; i < input.length ; i++){
    const [a,b,c] = input[i]
    sum1 += b
    sum2 += c
    if(b > c){
        count1 += a
    }
    else if(b < c){
        count2 += a
    }
}
if(sum1 > sum2 && count1 > count2){
    console.log(1)
}
else if(sum1 < sum2 && count1 < count2){
    console.log(2)
}
else{
    console.log(0)
}