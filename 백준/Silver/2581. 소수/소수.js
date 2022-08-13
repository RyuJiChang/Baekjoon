const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let start = input[0]
let num = input[1]
let result = []
let resultSum = 0

for(let i = start; i <= num; i ++){
  
  let innerResult = 0;
  for(let j = 1; j < i; j++){
    if(i % j === 0){
      innerResult = innerResult + j
    }
  }
  if(innerResult === 1){
    result.push(i)
  }
  
}

for(let i = 0 ; i < result.length ; i++){
    resultSum += result[i]
}
if(resultSum){
    console.log(resultSum)
    console.log(result[0])
}
else{
    console.log(-1)
}