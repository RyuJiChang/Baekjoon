const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
for(let i = 1 ; i <= 5 ; i++){
    let str = '@'.repeat(input)
    if(i === 1 || i === 5){
        str = '@@@@@'.repeat(input)
    }
    for(let j = 0 ; j < input ; j++){
        result.push(str)
    }
}
console.log(result.join('\n'))