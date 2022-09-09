function solution(n, s) {
    if(n > s){
        return [-1]
    }
    if(n ===1){
        return [s]
    }
    let answer = new Array(n).fill(Math.floor(s/n))
    for(let i = 0 ; i < s%n ; i++){
        answer[i]++
    }
    
    return answer.reverse()
}