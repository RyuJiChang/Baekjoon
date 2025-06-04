const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

for(let i = 1 ; i < input.length ; i++){
    if(i != 1){
        console.log('')
    }
    const [x, y] = input[i]
    const list = []
    
    for(let j = 0 ; j < y ; j++){
        list.push('X'.repeat(x))
    }

    console.log(list.join('\n'))
}