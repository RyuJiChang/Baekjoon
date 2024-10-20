const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const recurtion = (n) => {
    if(n == 3){
        return ['  *  ', ' * * ', '*****']
    }

    const arr = recurtion(n / 2)
    const result = []
    
    for(let i = 0 ; i < arr.length ; i++){
        result.push(' '.repeat(n / 2) + arr[i] + ' '.repeat(n / 2))
    }
    
    for(let i = 0 ; i < arr.length ; i++){
        result.push(arr[i] + ' ' + arr[i])
    }
    
    return result
}

console.log(recurtion(input).join('\n'))