function solution(array) {
    let obj = {}
    for(let i = 0 ; i < array.length ; i++){
        if(obj[array[i]]){
            obj[array[i]]++
        }
        else{
            obj[array[i]] = 1 
        }
    }
    let nums = []
    for(let key in obj){
        nums.push(obj[key])
    }
    let max = Math.max(...nums)
    let result = []
    for(let key in obj){
        if(obj[key] === max){
            result.push(Number(key))
        }
    }
    return (result.length === 1 ? result[0] : -1)
}