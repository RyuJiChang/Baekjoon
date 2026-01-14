const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const list = new Array(input.length -1).fill(0)

for(let i = 0 ; i < input[1].length ; i++){
    const map = {}
    
    for(let j = 1 ; j < input.length ; j++){
        if(map[input[j][i]]){
            map[input[j][i]]++
        }
        else{
            map[input[j][i]] = 1
        }
    }

    for(let j = 1 ; j < input.length ; j++){
        if(map[input[j][i]] === 1){
            list[j - 1] += Number(input[j][i])
        }
    }
}

console.log(list.join('\n'))