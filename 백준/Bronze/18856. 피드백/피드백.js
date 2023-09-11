const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
for(let i = 1 ; i <= input ; i++){
    if(input === i){
        result.push(997)
    }
    else{
        result.push(i)
    }
}
console.log(input)
console.log(result.join(' '))