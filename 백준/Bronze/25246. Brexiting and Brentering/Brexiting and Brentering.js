const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const vowels = ['a', 'e', 'i', 'o', 'u']
let index = 0

for(let i = input.length - 1 ; i > 0 ; i--){
    if(vowels.includes(input[i])){
        index = i
        break
    }
}

console.log(input.slice(0,index+1) + 'ntry')