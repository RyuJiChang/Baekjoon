function solution(number) {
    var answer = []
    
    for(let i = 0 ; i < number.length ; i++){
        for(let j = i+1 ; j < number.length ; j++){
            for(let k = j+1 ; k < number.length ; k++){
                answer.push(number[i]+number[j]+number[k])
            }
        }
    }
    return answer.filter(el => el === 0).length;
}