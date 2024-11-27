const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const result = []

for(let i = 0 ; i < input.length -1 ; i++){
    const newStr = []

    for(let j = 0 ; j < input[i].length ; j++){
        const str = input[i][j]
        if(str.length < 4){
            newStr.push(str)
        }
        else{
            newStr.push(str[0] + str.slice(1,str.length-1).split('').reverse().join('') + str[str.length-1])
        }
    }
    result.push(newStr.join(' '))
}

console.log(result.join('\n'))