function solution(participant, completion) {
    var answer = '';
    let part = participant.sort()
    let com = completion.sort()
    for(let i = 0 ; i < part.length ; i++){
        if(part[i] !== com[i]){
            return part[i]
        }
    }
    return 
}