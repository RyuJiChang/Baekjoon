const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const encoder = {'a' : 4, 'e' : 3, 'i' : 1, 'o' : 0, 's' : 5} 
let result = ''

for(let i = 0 ; i < input.length ; i++){
    if(encoder[input[i]] != undefined){
        result += encoder[input[i]]
    }
    else{
        result += input[i]
    }
}

console.log(result)