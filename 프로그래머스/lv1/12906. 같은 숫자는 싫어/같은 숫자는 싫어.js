function solution(arr)
{
    var answer = [arr[0]];
    let before = arr[0]
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] === before){
            continue
        }
        else{
            answer.push(arr[i])
            before = arr[i]
        }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}