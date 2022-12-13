function solution(k, tangerine) {
    let answer = 0;
    let sum = 0
    let obj = {}
    let arr = []
    for(let i = 0 ; i < tangerine.length ; i++){
        if(obj[tangerine[i]]){
            obj[tangerine[i]]++
        }
        else{
            obj[tangerine[i]] = 1
        }
    }
    for(let key in obj){
        arr.push(obj[key])
    }
    arr.sort((a,b) => a-b)
    
    while(sum < k){
        sum += arr.pop()
        answer++
    }
    return answer
}