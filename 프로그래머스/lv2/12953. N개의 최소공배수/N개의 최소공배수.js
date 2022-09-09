function solution(arr) {
    var answer = arr[0];
    function minMulty(a,b){
        let before = Math.max(a,b)
        let now = Math.min(a,b)
        while(before%now){
            let some = before
            before = now
            now = some % now
        }
        return a*b/now
    }
    for(let i = 1 ; i < arr.length ; i++){
        answer = minMulty(answer,arr[i])
    }
    return answer;
}