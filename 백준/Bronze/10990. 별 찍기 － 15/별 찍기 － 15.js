const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
for(let i = 1 ; i <= input ; i++){
    if(i === 1){
        result.push(`${' '.repeat(input-i)}*`)
    }
    else{
        result.push(`${' '.repeat(input-i)}*${' '.repeat(2*i-3)}*`)
    }
}

console.log(result.join('\n'))