const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []
const modCheck = (arr) => {
    let map = {}
    for(let i = 1 ; i < 1000000 ; i++){
        map = {}
        let flag = true
        for(let j = 0 ; j < arr.length ; j++){
            if(map[arr[j] % i]){
                flag = false
                break
            }else{
                map[arr[j] % i] = true
            }
        }

        if(flag){
            return i
        }
    }
}



for(let i = 1 ; i < input.length ; i++){
    const arr = [...input.slice(i+1, i + input[i]+1)]
    result.push(modCheck(arr))

    i += input[i]
}

console.log(result.join('\n'))