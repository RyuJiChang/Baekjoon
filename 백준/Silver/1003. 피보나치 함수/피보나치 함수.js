const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

function fibonacci(n){
let helper = [0,1,1,2,3,5,8,13,21,34]
function calculate(n){
if(helper[n] !== undefined){
  return helper[n]
}
helper[n] = calculate(n-1) + calculate(n-2)
return helper[n]
}
return calculate(n)
}
let result = ''
for(let i = 1 ; i < input.length ; i++){
    if(input[i] === 0){
         console.log('1 0')
        continue
    }
    else if(input[i] === 1){
        console.log('0 1')
        continue
    }  
    else{
     console.log(`${fibonacci(input[i]-1)} ${fibonacci(input[i])}`)
    }
}