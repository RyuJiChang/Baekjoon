function solution(array, height) {
    let answer = 0;
    for(let el of array){
        if(el > height){
            answer++
        }
    }
    return answer;
}