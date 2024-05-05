const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const addLength = input.pop()
const check = {}
let maxCount = 0
let maxLength = 0

for(let i = 0 ; i < input.length ; i++){
    if(check[input[i]]){
        check[input[i]]++
    }
    else{
        check[input[i]] = 1
    }
}

for(let key in check){
    maxCount = Math.max(check[key])
    maxLength = key
}

const newArr = new Array(...(new Set(input))).sort((a,b) => a-b)

if(maxCount == 4){
    console.log(1)
}
else if(maxCount == 3 && newArr[1] == maxLength && newArr[0] + addLength == newArr[1]){
    console.log(1)
}
else{
    console.log(0)
}