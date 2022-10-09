function solution(lines) {
    let obj = {}
    let answer = 0
    for(let i = 0 ; i < lines.length ; i++){
        let a = Math.min(...lines[i])
        let b = Math.max(...lines[i])
        for(let i = a ; i < b ; i++){
            if(obj[i]){
                obj[i]++
            }
            else{
                obj[i] = 1
            }
        }
    }
    for(let key in obj){
        if(obj[key] > 1){
            answer++
        }
    }
    
    return answer
}