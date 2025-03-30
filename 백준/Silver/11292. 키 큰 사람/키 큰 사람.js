const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == '0'){
        break
    }
    const num = Number(input[i])
    const arr = input.slice(i + 1, i + num + 1).map(el => el.split(' '))
    let max = 0
    const strList = []
    for(let j = 0 ; j < arr.length ; j++){
        max = Math.max(max, arr[j][1])
    }
    
    for(let j = 0 ; j < arr.length ; j++){
        if(max == arr[j][1]){
            strList.push(arr[j][0])
        }
    }
    result.push(strList.join(' '))
    i+=num
    
}
console.log(result.join('\n'))