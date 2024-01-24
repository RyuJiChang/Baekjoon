const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const calculate = (str) => {
    const arr = str.split('').map(Number)
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i]
    }
    return sum * arr.length
}
const a = calculate(input[0])
const b = calculate(input[1])

if(a > b){
    console.log(1)
}
else if(b > a){
    console.log(2)
}
else if(a == b){
    console.log(0)
}