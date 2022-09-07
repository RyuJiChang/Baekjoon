function solution(s) {
    var answer = s.split(' ')
    for(let i = 0 ; i < answer.length ; i++){
        if(answer[i].length > 1){
            answer[i] = `${answer[i][0].toUpperCase()}${answer[i].slice(1).toLowerCase()}`
        }
        else if(answer[i] !== ''){
            answer[i] = `${answer[i][0].toUpperCase()}`
        }
    }
    return answer.join(' ')
}