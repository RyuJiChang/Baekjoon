const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
const getMine = (arr, x, y) => {
    const newArr = []
    for(let i = 0 ; i < x ; i++){
        line = []
        for(let j = 0 ; j < y ; j++){
            if(arr[i][j] == '*'){
                line.push('*')
            }
            else{
                line.push(0)
            }
        }
        newArr.push(line)
    }

    for(let i = 0 ; i < newArr.length ; i++){
        for(let j = 0 ; j < newArr[i].length ; j++){
            if(newArr[i][j] == '*'){
                for(let n = Math.max(0, i - 1) ; n < Math.min(newArr.length, i + 2) ; n++){
                    for(let m = Math.max(0, j - 1) ; m < Math.min(newArr[i].length, j + 2) ; m++){
                        if(newArr[n][m] != '*'){
                            newArr[n][m]++
                        }
                    }
                }
            }
        }
    }
    return newArr
}
for(let i = 0 ; i < input.length - 1 ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    const arr = []
    for(let j = i + 1 ; j <= i + x ; j++){
        arr.push(input[j])
    }
    result.push(getMine(arr, x, y).map(el => el.join('')).join('\n'))
    i += x
}

console.log(result.join('\n'))