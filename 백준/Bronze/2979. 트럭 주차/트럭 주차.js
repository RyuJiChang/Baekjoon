const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const parking = new Array(101).fill(0)
let sum = 0

const add = (start, end) => {
    for(let i = start+1 ; i <= end ; i++){
        parking[i]++
    }
}

add(input[1][0], input[1][1])
add(input[2][0], input[2][1])
add(input[3][0], input[3][1])

for(let i = 1 ; i <= 100 ; i++){
    if(parking[i] == 1){
        sum += input[0][0]
    }
    else if(parking[i] == 2){
        sum += input[0][1] * 2
    }
    else if(parking[i] == 3){
        sum += input[0][2] * 3
    }
}

console.log(sum)