function solution(numbers) {
    let answer = 0;
    for(let el of numbers){
        answer += el
    }
    return answer/numbers.length;
}