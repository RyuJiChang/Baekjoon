let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = []
for(let i = 1 ; i < input.length ; i++){
    let arrs = ['#'.repeat(input[i])]
    for(let j = 1 ; j < input[i]-1 ; j++){
        arrs.push(`#${'J'.repeat(input[i]-2)}#`)
    }
    if(input[i] !== 1){
    arrs.push('#'.repeat(input[i]))
    }
    result.push(arrs.join('\n'))
}

console.log(result.join('\n\n'))