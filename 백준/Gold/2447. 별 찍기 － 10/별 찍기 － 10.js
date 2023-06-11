const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const result = []
for(let i = 0 ; i < input ; i++){
    result.push(new Array(input).fill(' '))
}

const recursion = (x, y, length) => {
    if(length === 1){
        result[x][y] = '*'
        return
    }

    const l = length/3
    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 3 ; j++){
            if(i*j !== 1){
                recursion(x + i*l, y + j*l, l)
            }
        }
    }
}

recursion(0,0,input)

console.log(result.map(el => el.join('')).join('\n'))