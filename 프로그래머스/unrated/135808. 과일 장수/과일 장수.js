function solution(k, m, score) {
    let scoreObj = {}
    let answer = 0;
    
    for(let i = 0 ; i < score.length ; i++){
        if(scoreObj[score[i]]){
            scoreObj[score[i]]++
        }
        else{
            scoreObj[score[i]] = 1
        }
    }
    for(let i = k ; i > 0 ; i--){
        if(scoreObj[i]){
            answer += Math.floor(scoreObj[i]/m)*i*m
            if(scoreObj[i-1]){
                scoreObj[i-1] += (scoreObj[i] - Math.floor(scoreObj[i]/m)*m)
            }
            else{
                scoreObj[i-1] = (scoreObj[i] - Math.floor(scoreObj[i]/m)*m)
            }
        }
    }
    
    return answer;
}