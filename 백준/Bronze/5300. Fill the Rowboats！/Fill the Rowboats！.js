const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
for(let i = 1 ; i <= input ; i++){
    result.push(i)
    if(i % 6 == 0){
        result.push('Go!')
    }
}
if(result[result.length - 1] != 'Go!'){
    result.push('Go!')
}

console.log(result.join(' '))