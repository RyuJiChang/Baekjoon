const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(' ').map(Number)
    if(a%b == 0){
        result.push(`Case ${i}: ${Math.floor(a/b)}`)
    }
    else if(Math.floor(a/b) != 0){
        result.push(`Case ${i}: ${Math.floor(a/b)} ${a%b}/${b}`)
    }
    else{
        result.push(`Case ${i}: ${a%b}/${b}`)
    }
}

console.log(result.join('\n'))