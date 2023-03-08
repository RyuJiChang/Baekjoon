const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const vowel = {a : 1, e : 1, i : 1, o : 1, u : 1}
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    let count = 0;
    for(let j = 0 ; j < input[i].length ; j++){
        if(vowel[input[i][j].toLowerCase()]){
            count += 1
        }
    }
    result.push(count)
}

console.log(result.join('\n'))