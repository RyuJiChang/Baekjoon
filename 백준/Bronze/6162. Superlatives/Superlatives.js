const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const data = [`Data Set ${i}:`]
    let [a, b] = input[i].split(' ').map(Number)
    if(a <= b){
        data.push('no drought')
    }
    else if(a <= b * 5){
        data.push('drought')    
    }
    else{
        let count = 0
        while (a > b * 5) {
            a /= 5
            count++
        }
        data.push('mega '.repeat(count) + 'drought')
    }
    result.push(data.join('\n'))
}

console.log(result.join('\n\n'))