let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length ; i++){
    if(i === 1){
        continue
    }
    let [a,b] = input[i].split(' ').map(Number)
    result.push(1000*a/b)
}
console.log(Math.min(...result))