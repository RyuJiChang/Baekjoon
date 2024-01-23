const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i+=2){
    const data = [`Data Set ${Math.ceil(i/2)}:`]
    const action = input[i+1]
    let head = Number(input[i])
    for(let j = 0 ; j < action.length ; j++){
        if(action[j] == 'c'){
            head++
        }
        else if(action[j] == 'b'){
            head--
        }
    }
    data.push(head)
    result.push(data.join('\n'))
}

console.log(result.join('\n\n'))
