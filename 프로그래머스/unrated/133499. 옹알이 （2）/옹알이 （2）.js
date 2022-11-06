function solution(babbling) {
    let answer = 0;
    let cantsay = ['ayaaya','yeye','woowoo','mama']
    for(let i = 0 ; i < babbling.length ; i++){
        if(babbling[i].includes(cantsay[0]) || babbling[i].includes(cantsay[1]) || babbling[i].includes(cantsay[2]) || babbling[i].includes(cantsay[3])) continue
        if(babbling[i].split('aya').join('0').split('ye').join('0').split('woo').join('0').split('ma').join('0').split('0').join('') === ''){
            answer++
        }
    }
    return answer;
}