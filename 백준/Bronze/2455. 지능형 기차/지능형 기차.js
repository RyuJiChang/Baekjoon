let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


let sum = 0
let maxSum = 0
for(let i = 0 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    sum = sum +b -a
    if(sum > maxSum){
        maxSum = sum
    }
}
console.log(maxSum)