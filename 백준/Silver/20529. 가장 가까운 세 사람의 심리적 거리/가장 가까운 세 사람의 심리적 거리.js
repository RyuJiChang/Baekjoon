const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
const checker = (a,b,c) => {
    let sum = 0
    for(let i = 0 ; i < 4 ; i++){
        if(a[i] !== b[i]){
            sum += 1
        }
        if(a[i] !== c[i]){
            sum += 1
        }
        if(b[i] !== c[i]){
            sum += 1
        }
    }
    return sum
}

for(let i = 2 ; i < input.length ; i+=2){
    const test = input[i].split(' ')
    let min = 16
    if(test.length > 32){
        result.push(0)
        continue
    }
    for(let j = 0 ; j < test.length-2 ; j++){
        for(let k = j+1 ; k < test.length-1 ; k++){
            for(let l = k+1 ; l < test.length ; l++){
                min = Math.min(min, checker(test[j], test[k], test[l]))
            }
        }
    }
    result.push(min)
}

console.log(result.join('\n'))