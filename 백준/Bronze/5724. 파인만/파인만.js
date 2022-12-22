let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
let arr = [0,1] 
for(let i = 0 ; i < input.length-1 ; i++){
    result.push(recurtion(input[i]))
}
function recurtion(num) {
    if(arr[num]){
       return arr[num] 
    }
    arr[num] = num**2 + recurtion(num-1)
    return arr[num]
}

console.log(result.join('\n'))