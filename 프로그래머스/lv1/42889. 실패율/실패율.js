function solution(N, stages) {
    var answer = [];
    let now = stages.sort((a,b)=>b-a)
    let obj = {}
    while(now.length){
        let here = [...now]
        for(let i = now.length-1 ; i >= 0 ; i--){
            if(now[i] > N){
               here.pop()
               }
            else if(obj[now[i]] === undefined){
                obj[now[i]] = 1
                here.pop()
            }
            else if(now[i] === now[i+1]){
                obj[now[i]]++
                here.pop()
            }
            else{
                break
            }
        }
        now = [...here]
    }
    let leftmember = stages.length
    let numArr = []
    for(let i = 1 ; i <= N ; i++){
        if(obj[i] === undefined){
            numArr.push([i,0])
        }
        else if(obj[i] && leftmember){
            numArr.push([i,obj[i]/leftmember])
            leftmember -= obj[i]
        }
        else{
            numArr.push([i,0])
        }
    }
    numArr = numArr.sort((a,b) => b[1]-a[1])
    for(let i = 0 ; i < numArr.length ; i++){
        answer.push(numArr[i][0])
    }
    return answer;
}