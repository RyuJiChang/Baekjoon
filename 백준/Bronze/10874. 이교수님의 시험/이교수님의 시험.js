const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const result = []

for(let i = 1 ; i < input.length ; i++){
    let flag = true
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] != ((j) % 5) + 1){
            flag = false
            break
        }
    }
    if(flag){
        result.push(i)
    }
}

console.log(result.join('\n'))