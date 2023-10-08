const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []
for(let i = 0 ; i < input.length -1 ; i++){
    let mile = 0
    let now = 0
    for(let j = i+1 ; j <= i + input[i][0] ; j++){
        const [mph, time] = input[j]
        mile += (time - now) * mph
        now = time
    }
    i+=input[i][0]
    result.push(`${mile} miles`)
}

console.log(result.join('\n'))
