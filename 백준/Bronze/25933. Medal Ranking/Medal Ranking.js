const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [g1, s1, b1, g2, s2, b2] = input[i].split(' ').map(Number)
    const data = [input[i]]
    let color = false
    let count = false
    if(g1+s1+b1 > g2+s2+b2){
        count = true
    }
    if(g1 > g2 || (g1 === g2 && s1 > s2) || (g1 === g2 && s1 === s2 && b1 > b2)){
        color = true
    }
    if(color && count){
        data.push('both')
    }
    else if(color){
        data.push('color')
    }
    else if(count){
        data.push('count')
    }
    else{
        data.push('none')
    }
    result.push(data.join('\n'))
}

console.log(result.join('\n\n'))