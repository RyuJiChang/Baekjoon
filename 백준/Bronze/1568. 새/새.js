let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0
const getAcend = (num) => {
    for(let i = 1 ; i <= input ; i++){
        input -= i
        count++
    }
}

while(input > 0){
    getAcend(input)
}

console.log(count)