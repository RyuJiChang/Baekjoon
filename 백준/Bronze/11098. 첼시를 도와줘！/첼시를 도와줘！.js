const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const range = Number(input[i])
    let max = 0
    let maxName = ''
    for(let j = i + 1 ; j <= i + range ; j++){
        const [price, name] = input[j].split(' ')
        if(Number(price) > max){
            max = Number(price)
            maxName = name
        }
    }
    console.log(maxName)
    i += range
}