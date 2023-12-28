const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [term, time, eat] = input.shift().split(' ').map(Number)
let result = 'N'
let before = 0
input.push(String(time))
for(let i = 0 ; i < input.length ; i++){
    const now = Number(input[i])
    if(now - before >= term){
        result = 'Y'
    }
    before = now
}

console.log(result)