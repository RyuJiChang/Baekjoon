const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const balanceCheck = (str) => {
    let isBalance = "yes"
    const stack = []
    const balanceMatch = {"]":"[", "}":"{", ")":"("}
    
    for(let i = 0 ; i < str.length ; i++){
        if(["[","{","("].includes(str[i])){
            stack.push(str[i])
        }
        else if(["]","}",")"].includes(str[i])){
            const checkNow = stack.pop()
            if(balanceMatch[str[i]] !== checkNow){
                return "no"
            }
        }
    }
    if(stack.length){
        return "no"
    }
    return isBalance
}

for(let i = 0 ; i < input.length-1 ; i++){
    result.push(balanceCheck(input[i]))
}

console.log(result.join('\n'))