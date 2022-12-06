function solution(s) {
    let answer = 0;
    
    for(let i = 0 ; i < s.length ; i++){
        let now = s[i]
        let count = 0
        let nowNum = 1
        let anotherNum = 0
        while(i+count < s.length && nowNum !== anotherNum){
            count++
            if(s[i+count] === now){
                nowNum++
            }
            else{
                anotherNum++
            }
        }
        answer++
        i += count 
    }
    
    return answer;
}