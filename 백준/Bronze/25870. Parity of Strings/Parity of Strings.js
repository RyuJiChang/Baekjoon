const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const checker = {}

let odd = 0
let even = 0

for(let i = 0 ; i < input.length ; i++){
    if(checker[input[i]]){
        checker[input[i]]++
    }
    else{
        checker[input[i]] = 1
    }
}

for(let key in checker){
    if(checker[key] % 2){
        odd++
    }
    else{
        even++
    }
}

if(odd == 0 && even > 0){
    console.log(0)
}
else if(odd > 0 && even == 0){
    console.log(1)
}
else{
    console.log(2)
}