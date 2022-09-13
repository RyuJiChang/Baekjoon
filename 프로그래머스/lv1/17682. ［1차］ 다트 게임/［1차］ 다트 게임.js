function solution(dartResult) {
    let answer = [];
    let before = 0
    let result = 0
    count = 0
    for(let i = 2 ; i < dartResult.length ; i++){
        if(count === 2){
            break
        }
        else if(!isNaN(Number(dartResult[i])) && !isNaN(Number(dartResult[i+1])) && isNaN(Number(dartResult[i+2])) ){
                if(count === 0){
                before = i
                answer.push(dartResult.slice(0,i))
                count++
                    i++
            }
            else{
                answer.push(dartResult.slice(before,i))
                answer.push(dartResult.slice(i))
                i++
            }
        }
        else if(!isNaN(Number(dartResult[i])) && isNaN(Number(dartResult[i+1]))){
            if(count === 0){
                before = i
                answer.push(dartResult.slice(0,i))
                count++
            }
            else{
                answer.push(dartResult.slice(before,i))
                answer.push(dartResult.slice(i))
            }
        }
    }
    for(let i = 0 ; i < 3 ; i++){
        if(answer[i].includes("S")){
            let some = answer[i].split('S')
            if(some[1] === ''){
                answer[i] = Number(some[0]) 
            }
            else if(some[1] === '#'){
                answer[i] = -Number(some[0])
            }
            else if(i === 0){
                answer[i] = Number(some[0])*2 
            }
            else if(some[1] === '*'){
                answer[i] = Number(some[0])*2 
                answer[i-1] *= 2
            }
        }
        else if(answer[i].includes("T")){
            let some = answer[i].split('T')
            if(some[1] === ''){
                answer[i] = Number(some[0])**3 
            }
            else if(some[1] === '#'){
                answer[i] = -(Number(some[0])**3)
            }
            else if(i === 0){
                answer[i] = 2*(Number(some[0])**3)
            }
            else if(some[1] === '*'){
                answer[i] = 2*(Number(some[0])**3)
                answer[i-1] *= 2
            }
        }
        else {
            let some = answer[i].split('D')
            if(some[1] === ''){
                answer[i] = Number(some[0])**2
            }
            else if(some[1] === '#'){
                answer[i] = -(Number(some[0])**2)
            }
            else if(i === 0){
                answer[i] = (Number(some[0])**2)*2
            }
            else if(some[1] === '*'){
                answer[i] = (Number(some[0])**2)*2
                answer[i-1] *= 2
            }
        }
    }
    
    for(let i = 0 ; i < 3 ; i++){
        result += answer[i]
    }
    return result;
}