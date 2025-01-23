const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let list = new Array(10).fill(0)

for(let i = input[0] ; i <= input[1] ; i++){
    const str = String(i)
    for(let i = 0 ; i < str.length ; i++){
        list[str[i]]++
    }
}

console.log(list.join(' '))