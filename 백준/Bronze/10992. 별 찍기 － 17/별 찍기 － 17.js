const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 1 ; i <= input ; i++){
    if(i === 1){
        result.push(' '.repeat(input-i)  + '*'.repeat(i))
    }
    else if(i === input){
        result.push('*'.repeat(i*2 -1))
    }
    else{
        result.push(' '.repeat(input-i) + '*' + ' '.repeat(i*2 -3) + '*')
    }
}

console.log(result.join('\n'))