const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    const str = input[i]
    let sum = 0 
    for(let j = 0 ; j < str.length - 1 ; j++){
        sum += (str[j] == '1' ? 1 : 0)
    }
    result.push(str.slice(0,str.length-1) + (str[str.length-1] == 'e' ? sum % 2 : (sum + 1) % 2) )
}

console.log(result.join('\n'))