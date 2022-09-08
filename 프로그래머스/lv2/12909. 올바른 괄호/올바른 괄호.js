// function solution(s){
// let before = s
// let now = s.split('()').join('')
// while(a === a){
    
// }
// }


function solution(s){
    let now = 0
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === '('){
            now++
        }
        else{
            if(now === 0){
                return false
            }
            else{
                now--
            }
        }
    }

    return now === 0;
}