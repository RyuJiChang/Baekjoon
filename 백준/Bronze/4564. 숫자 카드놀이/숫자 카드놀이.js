const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length - 1 ; i++){
    const result = []
    let str = input[i]
    while (str.length > 1) {
        result.push(str)
        const strList = str.split('')
        let newStr = 1
        for(let j = 0 ; j < strList.length ; j++){
            newStr *= strList[j]
        }
        str = String(newStr)
    }
    result.push(str)
    console.log(result.join(' '))
}