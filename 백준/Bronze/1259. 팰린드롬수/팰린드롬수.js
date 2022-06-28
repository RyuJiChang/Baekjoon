const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = ''
for(let i = 0 ; i < input.length-1 ; i++){

    if(input[i] === input[i].split('').reverse().join('') || input[i].length === 1){
        if(i !== 0){
        result += '\n'
        }
        result += 'yes'
    }
    else{
        if(i !== 0){
        result += '\n'
    }
        result += 'no'
    }
}
console.log(result)