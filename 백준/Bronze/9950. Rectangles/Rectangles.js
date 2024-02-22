const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
for(let i = 0 ; i < input.length-1 ; i++){
    let [a, b, c] = input[i].split(' ').map(Number)
    if(a === 0){
        result.push(`${c == 0 ? 0 : c/b} ${b} ${c}`)
    }
    else if(b === 0){
        result.push(`${a} ${c == 0 ? 0 : c/a} ${c}`)
    }
    else if(c === 0){
        result.push(`${a} ${b} ${a*b}`)
    }
}
console.log(result.join('\n'))