function solution(progresses, speeds) {
    let answer = [];
    let count = 0
    let arr = progresses
    let arr2 = speeds
    while(arr.length){
        if(arr[0] === 100){
            newArr = [...arr]
            newArr2 = [...arr2]
            for(let i = 0 ; i < arr.length ; i++){
                if(arr[i] === 100){
                    newArr.shift()
                    newArr2.shift()
                }
                else{
                    break
                }
            }
            answer.push(arr.length - newArr.length)
            arr = [...newArr]
            arr2 = [...newArr2]
            continue
        }
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i]+arr2[i] > 100){
                arr[i] = 100
            }
            else{
                arr[i] += arr2[i]
            }
        }
    }
    
    return answer;
}