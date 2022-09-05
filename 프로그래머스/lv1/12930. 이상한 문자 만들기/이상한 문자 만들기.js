function solution(s) {
    var answer = s.split(' ')
    let result = []
    for(let i = 0 ; i < answer.length ; i++){
        let str = ''
        for(let j = 0 ; j < answer[i].length ; j++){
            if(j%2){
                str += answer[i][j].toLowerCase()
            }
            else{
                str += answer[i][j].toUpperCase()
            }
        }
        result.push(str)
    }
    return result.join(' ');
}