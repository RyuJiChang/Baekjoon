let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let result = 1
while(input > 1){
    input /= 2
    if(input !== Math.floor(input)){
        result = 0
        break
    }
}

console.log(result)