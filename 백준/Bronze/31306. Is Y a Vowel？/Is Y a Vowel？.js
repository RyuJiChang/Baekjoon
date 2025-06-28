const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let vowel = 0
let another = 0

for(let i = 0 ; i < input.length ; i++){
    if('aeiou'.indexOf(input[i]) != -1){
        vowel++
        another++
    }
    else if(input[i] == 'y'){
        another++
    }
}

console.log(vowel, another)