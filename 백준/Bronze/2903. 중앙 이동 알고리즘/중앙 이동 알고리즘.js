let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let n = 2
for(let i = 0 ; i < input ; i++){
    n = 2*n -1
}

console.log(n**2)