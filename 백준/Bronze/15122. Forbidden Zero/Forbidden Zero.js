let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

while(1){
    input++
    if(!String(input).includes('0')){
        break
    }
}

console.log(input)