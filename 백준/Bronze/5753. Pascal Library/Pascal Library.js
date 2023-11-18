const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length -1 ; i++){
    const [x, y] = input[i-1]
    let isJoin = 'no'
    for(j = 0 ; j < x ; j++){
        let now = 0 
        for(let k = 0 ; k < y ; k++){
            now += input[i + k][j]
        }
        if(now == y){
            isJoin = 'yes'
            break
        }
    }
    result.push(isJoin)
    i += y
}

console.log(result.join('\n'))