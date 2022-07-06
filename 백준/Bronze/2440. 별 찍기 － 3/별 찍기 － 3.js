const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)[0]
let result = '*'
for(let i = 0 ; i < input ; i++){
    result += '*'
}
for(let i = 0 ; i < input ; i++){
    result = result.slice(1)
    console.log(result)
}
