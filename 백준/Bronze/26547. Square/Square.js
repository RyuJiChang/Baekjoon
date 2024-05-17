const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    str = input[i]
    reverse = input[i].split('').reverse().join('')
    result.push(str)
    for(let j = 1 ; j < str.length - 1 ; j++){
        result.push(str[j] + ' '.repeat(str.length-2) + reverse[j])
    }
    if(str.length > 1){
        result.push(reverse)  
    }
}

console.log(result.join('\n'))