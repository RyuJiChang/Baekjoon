let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let num = 0
for(let i = 1 ; i < input+2 ; i++){
    num += i
}

console.log(num*input)