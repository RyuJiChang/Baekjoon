function solution(quiz) {
    let answer = [];
    for(let i = 0 ; i < quiz.length ; i++){
        let [a,b] = quiz[i].split(' = ')
        if(eval(a) === Number(b)){
            answer.push("O")
        }
        else{
            answer.push("X")
        }
    }
    return answer;
}