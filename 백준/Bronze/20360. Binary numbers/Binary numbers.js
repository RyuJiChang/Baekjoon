const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim()).toString(2).split('').reverse().join('')
const result = []

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 1){
        result.push(i)
    }
}

console.log(result.join(' '))