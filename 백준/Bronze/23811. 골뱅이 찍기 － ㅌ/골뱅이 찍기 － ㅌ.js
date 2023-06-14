const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const result = []

for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j < input ; j++){
        if(i%2){
            result.push('@'.repeat(input))
        }
        else{
            result.push('@@@@@'.repeat(input))
        }
    }
}

console.log(result.join('\n'))