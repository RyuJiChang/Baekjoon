const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input[1].split(' ').map(Number)
let count = 0
let result = [2]
for(let i = 3; i <=1000 ; i++){
let isOdd = true
    for(let j = 2 ; j <= Math.sqrt(i) ; j++){
        if(i%j===0){
            isOdd = false
        }  
        
    }
    if(isOdd){
    result.push(i)
    }
}
for(let i = 0 ; i < arr.length; i++){
    if(result.indexOf(arr[i]) !== -1){
        count++
    }
}
console.log(count)
