const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const calculateRD = (orders, arrLength, arr) => {
    let start = 0
    let end = arrLength-1
    let directionSwitch = false

    for(let i = 0 ; i < orders.length ; i++){
        if(orders[i] === "D"){
            if(directionSwitch){
                arr[end] = 0
                end--
            }
            else{
                arr[start] = 0
                start++
            }
        }
        else{
            directionSwitch = !directionSwitch
        }
    }

    if(directionSwitch){
        return `[${arr.filter(el => el).reverse().join(',')}]`
    }
    else{
        return `[${arr.filter(el => el).join(',')}]`
    }
}

for(let i = 1 ; i < input.length ; i += 3){
    const orders = input[i]
    const arrLength = Number(input[i+1])
    const arr = input[i+2].slice(1,input[i+2].length-1).split(',').map(Number)

    if(orders.split('').filter(el => el === "D").length > arrLength){
        result.push("error")
    }
    else{
        result.push(calculateRD(orders, arrLength, arr))
    }
}

console.log(result.join('\n'))