const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let left = 0
let right = 0
let maxLength = 0
const fruitMap = {}

while(right < input.length){
    let fruit = input[right]
    if(fruitMap[fruit]){
        fruitMap[fruit]++
    }
    else{
        fruitMap[fruit] = 1
    }

    while(Object.keys(fruitMap).length > 2){
        if(fruitMap[input[left]] == 1){
            delete fruitMap[input[left]]
        }
        else{
            fruitMap[input[left]]--
        }
        left++
    }
    maxLength = Math.max(maxLength, right - left + 1)
       
    right++
}

console.log(maxLength)