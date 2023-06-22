const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = ['Gnomes:']

for(let i = 1 ; i < input.length ; i++){
    const [a,b,c] = input[i].split(' ').map(Number)
    if(a < b && b < c){
        result.push('Ordered')
    }
    else if(a > b && b > c){
        result.push('Ordered')
    }
    else{
        result.push('Unordered')
    }
}

console.log(result.join('\n'))