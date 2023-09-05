const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a,b,c] = input[i].split(' ').map(Number).sort((a,b) => (a-b))
    const scenario = [`Scenario #${i}:`]
    if(a**2 + b**2 === c**2){
        scenario.push('yes')
    }
    else{
        scenario.push('no')
    }
    result.push(scenario.join('\n'))
}

console.log(result.join('\n\n'))