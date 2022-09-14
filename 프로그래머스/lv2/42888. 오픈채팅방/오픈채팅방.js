function solution(record) {
    var answer = [];
    let name = {}
    for(let i = 0 ; i < record.length ; i++){
        let [a,b,c] = record[i].split(' ')
        if(a !== 'Leave'){
             name[b] = c
        }
        
    }
    for(let i = 0 ; i < record.length ; i++){
        let [a,b,c] = record[i].split(' ')
        if(a === 'Enter'){
            answer.push(`${name[b]}님이 들어왔습니다.`)
        }
        else if(a === "Leave"){
            answer.push(`${name[b]}님이 나갔습니다.`)
        }
    }
    return answer;
}