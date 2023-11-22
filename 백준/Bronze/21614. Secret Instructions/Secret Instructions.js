const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
let way
for(let i = 0 ; i < input.length - 1 ; i++){
    const sum = Number(input[i][0]) + Number(input[i][1])
    if(sum === 0){
    }
    else if(sum % 2){
        way = 'left'
    }
    else{
        way = 'right'
    }
    result.push(`${way} ${input[i].slice(2)}`)
}
console.log(result.join('\n'))