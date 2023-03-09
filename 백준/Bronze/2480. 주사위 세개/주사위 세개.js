const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ")
let a =Number(input[0])
let b =Number(input[1])
let c =Number(input[2])
let result = c * 100

if(a===b && b===c){
    result = 10000 + a * 1000
}
else if(a===b || b===c){
    result = 1000 + b * 100
}
else if(a===c){
    result = 1000 + a * 100
}
else if(a>b){
    if(a>c){
      result = a * 100
    }
    else{
        result = c * 100
    }
}
else if(b>c){
    result = b * 100
}    
console.log(result)
