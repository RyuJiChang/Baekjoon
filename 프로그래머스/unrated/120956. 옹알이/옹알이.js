function solution(babbling) {
    let arr = babbling.map(el => el.split("aya").join('A').split("ye").join('B').split("woo").join('C').split("ma").join('D'))
    let answer = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].toUpperCase() === arr[i]){
            let result = 1
             for(let j = 0 ; j < arr[i].length-1 ; j++){
                 if(arr[i][j] === arr[i][j+1]){
                     result = 0
                 }
             }
            answer += result
        }
    }
    return answer
}