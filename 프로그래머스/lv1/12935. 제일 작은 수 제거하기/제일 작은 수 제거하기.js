function solution(arr) {
    var answer = [];
    if(arr.length < 2){
        return [-1]
    }
    else{
        let min = Math.min(...arr)
        answer = arr.filter((el) => el !== min)
    }
    return answer;
}