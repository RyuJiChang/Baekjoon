function solution(numbers, target) {
    var answer = [];
    let end = numbers.length
    function recurtion(n,sum){
        if(n === end){
            answer.push(sum)
            return
        }
        recurtion(n+1, sum + numbers[n])
        recurtion(n+1, sum - numbers[n])
    }
    recurtion(0,0)
    return answer.filter(el => el === target).length;
}