const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
let sets = 1

for(let i = 1 ; i < input.length ; i+= 2){
    const [x,y] = input[i].split(' ').map(Number)
    let count = 0
    let str = input[i+1]
    let list = []
    for(let j = i + 2 ; j < i + 2 + x ;  j++){
        for(let k = 0 ; k < y ; k++){
            if(str[k] == input[j][k]){
                list[k] = true
            }
        }
    }
    result.push(`Data Set ${sets}:
${y -list.filter(el => el).length}/${y}`)
    
    sets++
    i += x
}

console.log(result.join('\n\n'))