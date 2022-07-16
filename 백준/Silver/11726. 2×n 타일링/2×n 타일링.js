const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let num1 = 2
let num2 = 3
let temp = 3
let result = 0
if(n === 1 || n === 2 || n === 3){
  result =  n
}
else{
    for(let i = 4 ; i<=n ; i++){
        temp = num2%10007
        num2 = num1 + num2
        num1 = temp%10007
    }
  result =  num2%10007  
}
console.log(result)