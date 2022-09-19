function solution(operations) {
    var answer = [];
    for(let i = 0 ; i < operations.length; i++){
        let [a,b] = operations[i].split(' ')
        if( a === "I"){
            answer.push(Number(b))
            answer = answer.sort((a,b) => a-b)
        }
        else if(answer.length === 0){
            continue
        }
        else if(a === "D" && b === "1"){
            answer.pop()
        }
        else{
            answer.shift()
        }
    }
    if(answer.length){
        return [answer[answer.length-1],answer[0]]
    }
    else{
        return [0,0]
    }
}