const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const spellCheck = {}
let odd = 0
let even = 0
for(let i = 0 ; i < input.length ; i++){
    if(spellCheck[input[i]]){
        spellCheck[input[i]]++
    }
    else{
        spellCheck[input[i]] = 1
    }
}

for(key in spellCheck){
    if(spellCheck[key] % 2){
        odd++
    }
    else{
        even++
    }
}

if(odd > 0 && even > 0){
    console.log('0/1')
}
else if(odd > 0){
    console.log(1)
}
else{
    console.log(0)
}
