function solution(answers) {
    var answer = [];
    let a1 = [1, 2, 3, 4, 5]
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let b1 = 0
    let b2 = 0
    let b3 = 0
    for(let i = 0 ; i < answers.length ; i++){
        if(answers[i] === a1[i%5]){
            b1++
        }
        if(answers[i] === a2[i%8]){
            b2++
        }
        if(answers[i] === a3[i%10]){
            b3++
        }
    }
    let max = Math.max(b1,b2,b3)
    let arr = [[a1,b1],[a2,b2],[a3,b3]]
    for(let i = 0 ; i < 3 ; i++){
        if(arr[i][1] === max){
            answer.push(i+1)
        }
    }
    return answer;
}