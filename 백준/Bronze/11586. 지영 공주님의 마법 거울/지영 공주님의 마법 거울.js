const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
const num = input.pop()
const result = []
if(num == 1){
    for(let i = 0 ; i < input.length ; i++){
        result.push(input[i])
    }
}
if(num == 2){
    for(let i = 0 ; i < input.length ; i++){
        result.push(input[i].split('').reverse().join(''))
    }
}
else if(num == 3){
    for(let i = input.length-1 ; i >= 0 ; i--){
        result.push(input[i])
    }
}
console.log(result.join('\n'))