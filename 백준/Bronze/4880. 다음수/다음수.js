let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 0 ; i < input.length-1 ; i++){
    let [a,b,c] = input[i].split(' ').map(Number)
    if(a*c === b*b){
        result.push(`GP ${c*b/a}`)
    }
    else{
        result.push(`AP ${c+b-a}`)
    }
}

console.log(result.join('\n'))