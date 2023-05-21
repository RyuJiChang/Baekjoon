const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = []
for(let i = 1 ; i < input.length ; i++){
    const [paralTime, amount, nomalWork, paraWork] = input[i]
    const paraTotalTime = paralTime + amount * paraWork
    const nomalTotalTime = amount * nomalWork
    if(paraTotalTime === nomalTotalTime){
        result.push('does not matter')
    }
    else if(paraTotalTime > nomalTotalTime){
        result.push('do not parallelize')
    }
    else{
        result.push('parallelize')
    }
}

console.log(result.join('\n'))