let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 0 ; i < input.length-1 ; i++){
    let [a,b,c] = input[i].split(' ')
    if(b === "W"){
        if(Number(a)+200-Number(c) >= 0){
            result.push(Number(a)-Number(c))
        }
        else{
            result.push("Not allowed")
        }
    }
    else{
        result.push(Number(a)+Number(c))
    }
}

console.log(result.join('\n'))