const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let result = []
for(let i = 0 ; i <input.length ; i++){
    let [a,b,c,d] = input[i].split(' ').map(Number)
    for(let j = a+1 ; j <=c ; j++){
        for(let k = b+1 ; k <=d ; k++){
            result.push(`${j} ${k}`)
        }
    }
}
console.log([...new Set(result)].length)