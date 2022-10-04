function solution(emergency) {
    let arr = []
    for(let i = 0 ; i < emergency.length ; i++){
        arr.push([i+1,emergency[i]])
    }
    arr.sort((a,b) => b[1] - a[1])
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        let [a,b] = arr[i]
        result[a-1] = i+1
    }
    return result;
}