let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    if(a < b){
        result.push('NO BRAINS')
    }
    else{
        result.push('MMM BRAINS')
    }
}

console.log(result.join('\n'))