const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = "No"
const [x, y] = input[1].split(' ').map(Number)
const checker = (a1, b1, a2, b2) => {
    if(a1 <= x && x <= a2 && b1 <= y && y <= b2){
        return true
    }
    return false
}

for(let i = 2 ; i < input.length ; i++){
    const [a,b,c,d] = input[i].split(' ').map(Number)
    if(checker(a,b,c,d)){
        result = 'Yes'
        break
    }
}


console.log(result)