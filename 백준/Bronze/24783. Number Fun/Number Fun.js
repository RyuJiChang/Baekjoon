const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a, b, c] = input[i].split(' ').map(Number)
    if(a-b == c || b-a == c || a/b == c || b/a == c || a*b == c || a+b == c){
        result.push('Possible')
    }
    else{
        result.push('Impossible')
    }
}

console.log(result.join('\n'))
