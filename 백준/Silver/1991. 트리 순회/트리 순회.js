let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let obj = {}
let start = ''
let middle = ''
let end = ''
for(let i = 1 ; i < input.length ; i++){
    let [a,b,c] = input[i].split(' ')
    obj[a] =[b,c]
}

function recurtion(n) {
    if(n === '.') return
    start += n
    recurtion(obj[n][0])
    middle += n
    recurtion(obj[n][1])
    end += n
}

recurtion("A")

console.log(start)
console.log(middle)
console.log(end)