const result = [0]

const selfNumChecker = (num) => {
    let sum = num
    while(num !== 0){
        sum += num % 10
        num = Math.floor(num/10)
    }
    return sum
}
for(let i = 1 ; i <= 10000 ; i++){
    result.push(i)
}
for(let i = 1 ; i <= 10000 ; i++){
    let madeByThis = selfNumChecker(i)
    if(madeByThis <= 10000){
        result[madeByThis] = 0
    }
}



console.log(result.filter(el => el !== 0).join('\n'))