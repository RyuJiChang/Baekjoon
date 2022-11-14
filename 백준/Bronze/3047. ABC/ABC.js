let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [A,B,C] = input[0].split(' ').map(Number).sort((a,b) => a-b)
let result = []
for(let i = 0 ; i < 3 ; i++){
    if(input[1][i] === 'A'){
        result.push(A)
    }
    if(input[1][i] === 'B'){
        result.push(B)
    }
    if(input[1][i] === 'C'){
        result.push(C)
    }    
}
console.log(result.join(' '))