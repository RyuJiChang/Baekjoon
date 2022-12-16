let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = []
for(let i = 1 ; i < input.length ; i++){
    let str = ''
    let now = input[i]
    let idx = []
    while(now){
        if(now %2){
            str += '1'
        }
        else{
            str += '0'
        }
        now = Math.floor(now/2)
    }
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === '1'){
            idx.push(i)
        }
    }
    result.push(idx.join(' '))
}

console.log(result.join('\n'))