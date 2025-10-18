const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const str = input[i]
    let count = 0
    for(let j = 0 ; j < str.length - 2 ; j++){
        if(str.slice(j,j+3) == 'WOW'){
            count++
        }
    }
    console.log(count)
}