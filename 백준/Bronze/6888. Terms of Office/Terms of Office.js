const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

for(let i = input[0] ; i <= input[1] ; i += 60){
    console.log(`All positions change in year ${i}`)
}