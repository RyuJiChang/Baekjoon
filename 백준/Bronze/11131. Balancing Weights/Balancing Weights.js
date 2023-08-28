const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
for(let i = 2 ; i < input.length ; i+=2){
    const arr = input[i].split(' ').map(Number)
    let count = 0
    for(let j = 0 ; j < arr.length ; j++){
        count += arr[j]
    }
    if(count > 0){
        result.push('Right')
    }
    else if(count === 0){
        result.push('Equilibrium')
    }
    else{
        result.push('Left')
    }
}

console.log(result.join('\n'))