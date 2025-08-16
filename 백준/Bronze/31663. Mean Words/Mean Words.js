const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const list = []
let str = ''
for(let i = 1 ; i <= Number(input[0]) ; i++){
    for(let j = 0 ; j < input[i].length ; j++){
        if(list[j]){
            list[j].push(input[i][j])
        }
        else{
            list[j] = [input[i][j]]
        }
    }

}

for(let i = 0 ; i < list.length ; i++){
    let sum = 0
    for(let j = 0 ; j < list[i].length ; j++){
        sum += list[i][j].charCodeAt()
    }
    str += String.fromCharCode((sum / list[i].length))
}

console.log(str)