let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let sum = 0

for(let i = 1 ; i <= input ; i++){
    if(input%i === 0){
        sum += i
    }
}
console.log(sum)