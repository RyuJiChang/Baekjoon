const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
const target = input[1]
const last = input[1][target.length-1]

const popResult = (n) => {
    for(let i = 0 ; i < n ; i++){
        result.pop()
    }
}

if(target.length > 1){
    for(let i = 0 ; i < input[0].length ; i++){
        if(input[0][i] === last){
            let count = 0
            for(let j = 1 ; j < target.length ; j++){
                if(target[target.length -1 -j] !== result[result.length - j]){
                    count = 0
                    break
                }
                else{
                    count++
                }
            }
            if(count === 0){
                result.push(input[0][i])
            }
            else{
                popResult(count)
            }
        }
        else{
            result.push(input[0][i])
        }
    }
}
else{
    for(let i = 0 ; i < input[0].length ; i++){
        if(input[0][i] !== target){
            result.push(input[0][i])
        }
    }
}

console.log((result.length === 0 ? 'FRULA' : result.join('')))