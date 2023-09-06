const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 1  ; i <= 5 ; i++){
    for(let j = 1 ; j <= input ; j++){
        if(i === 1 || i === 3){
            result.push('@'.repeat(input * 5))
        }
        else{
            result.push('@'.repeat(input))
        }
    }
}

console.log(result.join('\n'))