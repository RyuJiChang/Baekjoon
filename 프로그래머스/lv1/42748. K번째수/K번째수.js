function solution(array, commands) {
    var answer = [];
    for(let i = 0 ; i < commands.length ; i++){
        let [a,b,c] = commands[i]
        answer.push(array.slice(a-1,b).sort((a,b) => a - b)[c-1] )
    }
    return answer;
}