const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const result = new Array(10).fill(0)

const addLeft = () => {
    for(let i = 0 ; i < 10 ; i++){
        if(result[i] == 0){
            result[i] = 1
            break
        }
    }
}

const addRight = () => {
    for(let i = 9 ; i >= 0 ; i--){
        if(result[i] == 0){
            result[i] = 1
            break
        }
    }
}

for(let i = 0 ; i < input.length ; i++){
    if(input[i] === 'L'){
        addLeft()
    }
    else if(input[i] === 'R'){
        addRight()
    }
    else{
        result[input[i]] = 0
    }
}

console.log(result.join(''))