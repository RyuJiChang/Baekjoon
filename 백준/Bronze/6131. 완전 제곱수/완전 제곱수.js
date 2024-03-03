const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0

for(let i = 1 ; i <= 500 ; i++){
    for(let j = 1 ; j < i ; j++){
        if(i**2 == j**2 + input){
            count++
            break
        }
    }
}

console.log(count)