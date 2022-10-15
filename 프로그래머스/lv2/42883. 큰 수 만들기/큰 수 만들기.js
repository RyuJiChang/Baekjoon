function solution(number, k) {
    let answer = ''
    let arr = number.split('').map(Number)
    let stop = k
    for(let i = 0 ; i < arr.length ; i++){
        if(stop === 0){
            answer += arr[i]
            continue
        }
        if(isMax(i,stop,arr) && arr.length > i+stop){
            answer += arr[i]
        }
        else{
            stop--
        }
    }
    return answer;
}

function isMax(a,num,arr){
    for(let i = a+1 ; i <= a+num ; i++){
        if(arr[a] < arr[i]){
            return false
        }
    }
    return true
}
