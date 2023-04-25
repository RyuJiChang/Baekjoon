let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const result = []

while (input > 1) {
    for(let i = 2 ; i <= input ; i++){
        if(input%i === 0){
            result.push(i)
            input/=i
            break
        }
    }
}


console.log(result.join('\n'))