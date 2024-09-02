function solution(arr) {
    const result = []
    for(let i = 0 ; i < arr.length ; i++){
        const x = arr[i]
        if(x < 50 && x % 2){
            result.push(x * 2)
        }
        else if(x >= 50 && x % 2 == 0){
            result.push(x / 2)
        }
        else{
            result.push(x)
        }
    }
    return result
}