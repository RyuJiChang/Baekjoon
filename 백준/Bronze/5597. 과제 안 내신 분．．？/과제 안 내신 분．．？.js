const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a,b) => a-b)
const obj = {}
for(let i = 0 ; i < input.length ; i++){
    obj[input[i]] = 1
}

for(let i = 1 ; i < 31 ; i++){
    if(!obj[i]){
        console.log(i)
    }
}
