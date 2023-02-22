const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    let [checkNumber, valid] = input[i].split(' ').map(Number)
    let oddCheck = 0
    while(checkNumber > 0){
        if(checkNumber%2){
            checkNumber = (checkNumber-1)
            oddCheck++
        }
        else{
            checkNumber /= 2
        }
    }
    if(oddCheck%2 === valid){
        result.push("Valid")
    }
    else{
        result.push("Corrupt")
    }
}

console.log(result.join('\n'))