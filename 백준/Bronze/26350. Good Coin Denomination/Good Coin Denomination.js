const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const text = []

for(let i = 1 ; i < input.length ; i++){
    let result = true
    let now = input[i][1]
    for(let j = 2 ; j < input[i].length ; j++){
        if(now *2 <= input[i][j]){
            now = input[i][j]
        }
        else{
            result = false
            break
        }
    }
    text.push(`Denominations: ${input[i].slice(1).join(' ')}
${result ? 'Good coin denominations!' : 'Bad coin denominations! '}`)
}

console.log(text.join('\n\n'))