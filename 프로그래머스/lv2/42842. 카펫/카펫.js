function solution(brown, yellow) {
    var answer = [];
    for(let i = 0 ; i < brown/2 ; i++){
        for(let j = 0 ; j <= i ; j++){
            if(2*i + 2* j -4 === brown && i*j - 2*i - 2*j +4 === yellow){
                answer.push(i)
                answer.push(j)
            }
        }
    }
    return answer;
}
//갈색 = 2a+2b-4
//갈색 +노란색 = ab
//노란색 = ab-2a-2b+4
//노란색 = a(b-2)-2b+4