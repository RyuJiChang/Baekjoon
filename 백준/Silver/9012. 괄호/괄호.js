const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const vpsChecker = (str) => {
    let result = "YES"
    const stack = []
    
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === '('){
            stack.push('(')
        }
        else{
            if(stack.length){
                stack.pop()
            }
            else{
                return "NO"
            }
        }
    }

    if(stack.length){
        return "NO"
    }
    
    return result
}

for(let i = 1 ; i < input.length ; i++){
    result.push(vpsChecker(input[i]))
}

console.log(result.join('\n'))