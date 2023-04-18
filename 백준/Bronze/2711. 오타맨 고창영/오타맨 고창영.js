const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [index, str] = input[i].split(' ')
    let answer = ''

    for(let j = 0 ; j < str.length ; j++){
        if(Number(index)-1 !== j){
            answer += str[j]
        }
    }
    result.push(answer)
}

console.log(result.join('\n'))