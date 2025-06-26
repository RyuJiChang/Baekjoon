const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 1 ; i < input.length ; i++){
    let n = input[i]
    let max = n

    while(n != 1){
        if(n % 2 === 0){
            n = n / 2
        }
        else{
            n = n * 3 + 1
        }
        if(n > max){
            max = n    
        }
    }

    result.push(max)
}

console.log(result.join('\n'))