function solution(numbers) {
    
    return numbers.sort((a,b) => b-a)[0]*numbers.sort((a,b) => b-1)[1];
}