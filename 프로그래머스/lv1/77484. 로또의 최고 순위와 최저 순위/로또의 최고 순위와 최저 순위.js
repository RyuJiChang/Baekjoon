function solution(lottos, win_nums) {
    let max = 7
    let min = 7
    for(let i = 0 ; i < 6 ; i++){
        if(lottos[i]){
            if(win_nums.indexOf(lottos[i]) !== -1){
                max -= 1
                min -= 1
            }
        }
        else{
            max -= 1
        }
    }
    if(min === 7){
        min = 6
    }
    if(max === 7){
        max = 6
    }
    var answer = [max,min];
    return answer;
}