let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = []

for(let i = 0 ; i < input.length-2 ; i++){
    let A  = String(Math.round((input[i+1] - input[i])*100)/100)
    if(A[A.length-3] === '.'){}
    else if(A[A.length-2] === '.'){
        A += '0'
    }
    else{
        A += '.00'
    }
    result.push(A)
}


console.log(result.join('\n'))