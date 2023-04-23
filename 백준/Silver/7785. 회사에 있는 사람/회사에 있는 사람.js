const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const accessRecord = {}
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [name, order] = input[i].split(' ')
    if(order === 'enter'){
        accessRecord[name] = 1
    }
    else{
        accessRecord[name] = 0
    }
}

for(let key in accessRecord){
    if(accessRecord[key]){
        result.push(key)
    }
}

console.log(result.sort().reverse().join('\n'))