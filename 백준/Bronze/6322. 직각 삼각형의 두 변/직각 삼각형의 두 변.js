const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 0 ; i < input.length -1 ; i++){
    const [a,b,c] = input[i].split(' ').map(Number)
    if(a === -1 && b < c){
        result.push(`Triangle #${i+1}
a = ${Math.sqrt(c**2 - b**2).toFixed(3)}`)
    }
    else if(b === -1 && a < c){
        result.push(`Triangle #${i+1}
b = ${Math.sqrt(c**2 - a**2).toFixed(3)}`)
    }
    else if(c === -1){
        result.push(`Triangle #${i+1}
c = ${Math.sqrt(a**2 + b**2).toFixed(3)}`)
    }
    else{
        result.push(`Triangle #${i+1}
Impossible.`)
    }
}

console.log(result.join('\n\n'))