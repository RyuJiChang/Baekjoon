const input = require('fs').readFileSync('/dev/stdin').toString().trim()

let answer = ''

for(let i = 0 ; i < input.length ; i++){
    const charNum = input[i].charCodeAt()
    if(charNum < 68){
        answer += String.fromCharCode(charNum + 23)
    }
    else{
        answer += String.fromCharCode(charNum - 3)
    }
}

console.log(answer)