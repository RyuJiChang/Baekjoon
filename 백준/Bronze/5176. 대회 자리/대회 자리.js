const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const [n, line] = input[i].split(' ').map(Number)
    const map = {}
    let count = 0
    for(let j = i + 1 ; j <= i + n ; j++){
        if(map[input[j]]){
            count++
        }else{
            map[input[j]] = 1
        }
    }
    console.log(count)
    i += n
}