function solution(priorities, location) {
    let answer = 0;
    let arr = []
    let poped = 1
    let maxArr = [...priorities].sort((a,b) => a-b)
    for(let i = 0 ; i < priorities.length ; i++){
        if(i === location){
            arr.push([priorities[i],0])
        }
        else{
            arr.push([priorities[i],1])
        }
    }
    
    while(poped){
        let max = maxArr.pop()
        let index
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i][0] === max){
                index = i
                break
            }
        }
        if(index === 0){
            poped = arr[index][1]
            let pop = arr.shift()
        }
        else{
            poped = arr[index][1]
            arr = [...arr.slice(index+1), ...arr.slice(0,index)]
        }
        answer++
    }
    
    return answer;
}