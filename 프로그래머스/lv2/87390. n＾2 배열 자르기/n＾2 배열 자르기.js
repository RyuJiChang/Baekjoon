function solution(n, left, right) {
    var answer = [];
    let a1 = Math.floor(left/n)
    let a2 = left % n
    let b1 = Math.floor(right/n)
    let b2 = right % n
    
    while(a2 !== b2 || a1 !== b1){
        answer.push(Math.max(a1+1,a2+1))
        if(a2 === n-1){
            a1++
            a2 = 0
        }
        else{
            a2++
        }
    }
    answer.push(Math.max(a1+1,a2+1))
    
    // for(let i = a1 ; i <= b1 ; i++){
    //     for(let j = 0 ; j < n ; j++){
    //         if(i === a1){
    //             if(j >= a2){
    //                 answer.push(Math.max(i+1,j+1))
    //             }
    //         }
    //         else if(i === b1){
    //             if(j <= b2){
    //                 answer.push(Math.max(i+1,j+1))
    //             }
    //         }
    //         else{
    //             answer.push(Math.max(i+1,j+1))
    //         }
    //     }
    // }
    
    return answer;
}