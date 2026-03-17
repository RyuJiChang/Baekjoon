const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').reverse().join('')
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    let num
    
    if(i % 2){
        num = input[i]*2
    }
    else{
        num = input[i]*1
        
    }
    if(num > 9){
        sum += 1 + num % 10
    }
    else{
        sum += num
    }
}

console.log(sum%10 == 0 ? 'DA' : 'NE')