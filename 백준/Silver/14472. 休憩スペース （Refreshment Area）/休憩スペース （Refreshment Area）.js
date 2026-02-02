const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [x, y, n] = input[0].split(' ').map(Number)
const str = '.'.repeat(n)
let count = 0

for(let i = 1 ; i <= x ; i++){
    for(let j = 0 ; j <= y - n ; j++){
        if(input[i].slice(j, j+n) == str){
            count++
        }
    }
}

for(let i = 1 ; i <= x - n + 1 ; i++){
    for(let j = 0 ; j < y ; j++){
        let strs = ''
        for(let k = i ; k < i+n ; k++){
            strs += input[k][j]
        }
        if(strs == str){
            count++
        }
    }
}



console.log(count)