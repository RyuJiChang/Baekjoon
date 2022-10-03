function solution(num_list, n) {
    let answer = []
    for(let i = 0 ; i < Math.ceil(num_list.length/n) ; i++){
        answer.push(new Array())
    }
    for(let i = 0 ; i < num_list.length ; i++){
        answer[Math.floor(i/n)][i%n] = num_list[i]
    }
    return answer;
}