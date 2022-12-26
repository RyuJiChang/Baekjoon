let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arrLength = Number(input[0])
let price = input[1].split(' ').map(Number)
let discount = []
let lower = 10000
for(let i = 2 ; i < input.length ; i++){
    let dcAmount = Number(input[i])
    if(dcAmount === 0){
        discount.push(0)
    }
    else if(dcAmount){
        let dcArr = []
        for(let j = i+1 ; j < i+1+dcAmount ; j++){
            let [dcIdx, dcPrice] = input[j].split(' ').map(Number)
            dcArr.push([dcIdx-1, dcPrice])
        }
        discount.push(dcArr)
    }
}
//계산함수를 구해야 한다
//1~n번쨰 순서를 넣을 경우 각각 숫자대로 처리하는 계산
function calculator(order) {
    let nowPrice = [...price]
    let nowPayed = 0
    
    for(let i = 0 ; i < order.length ; i++){
        nowPayed += nowPrice[order[i]]
        if(discount[order[i]]){
            for(let j = 0 ; j < discount[order[i]].length ; j++){
                let [dcIdx, dcPrice] = discount[order[i]][j]
                nowPrice[dcIdx] = Math.max(1,nowPrice[dcIdx]-dcPrice)
            }
        }
    }
    return nowPayed
}

//2~10개의 물약 순서 섞어줄 재귀
function recurtion(arr){
    if(arr.length === arrLength){
        lower = Math.min(calculator(arr),lower)
        return
    }
    for(let i = 0 ; i < arrLength ; i++){
        if(arr.includes(i) === false){
            recurtion([...arr,i])
        }
    }
}
recurtion([])
console.log(lower)