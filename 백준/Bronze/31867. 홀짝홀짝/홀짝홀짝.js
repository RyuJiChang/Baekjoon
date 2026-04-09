const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
let odd = 0
let even = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i]%2){
        odd++
    }
    else{
        even++
    }
}

if(odd == even){
    console.log(-1)
}
else if(odd > even){
    console.log(1)
}
else{
    console.log(0)
}