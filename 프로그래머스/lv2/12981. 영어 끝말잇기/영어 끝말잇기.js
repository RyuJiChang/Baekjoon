function solution(n, words) {
    var answer = [0,0];
    let arr = []
    for(let i = 0 ; i < words.length ; i++){
        if(i === 0){
            arr.push(words[i])
            continue
        }
        if(arr.indexOf(words[i]) !== -1 || words[i-1].slice(-1) !== words[i][0]){
            return [((i+1)%n === 0 ? n : (i+1)%n),Math.ceil((i+1)/n)]
        }
        else{
            arr.push(words[i])
        }
    }

    return answer;
}