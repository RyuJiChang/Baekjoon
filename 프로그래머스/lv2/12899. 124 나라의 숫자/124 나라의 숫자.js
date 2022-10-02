// function solution(n) {
//     let limit = [0]
//     let power = [0]
//     let num = ""
//     for(let i = 1 ; limit[i-1] < n; i++){
//         limit.push(3**i + limit[i-1])
//         power.push(3**i)
//     }
//     for(let i = limit.length-1 ; i > 0 ; i--){
//         if(i === 1){
//             if(n === 1){
//                 num += 1
//             }
//             else if(n === 2){
//                 num += 2
//             }
//             else{
//                 num += 4
//             }
//         }
//         else{
//             if(Math.floor(n/power[i-1]) === 1){
//                 num += 1
//             }
//             else if(Math.floor(n/power[i-1]) === 2){
//                 num += 2
//             }
//             else{
//                 num += 4
//             }
//             n = n%power[i-1]
//         }
//     }
//     return num;
// }
function solution(n) {
    answer = ''
    while(n > 0){
        n -= 1
        answer = '124'[n%3] + answer
        n = Math.floor(n/3)
    }
    return answer
}