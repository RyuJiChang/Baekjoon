function solution(survey, choices) {
    var answer = '';
    let obj = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    for(let i = 0 ; i < survey.length ; i++){
        let [a,b] = survey[i].split('')
        if(choices[i] === 1){
            obj[a] += 3
        }
        else if(choices[i] === 2){
            obj[a] += 2
        }
        else if(choices[i] === 3){
            obj[a] += 1
        }
        else if(choices[i] === 4){
            continue
        }
        else if(choices[i] === 5){
            obj[b] += 1
        }
        else if(choices[i] === 6){
            obj[b] += 2
        }
        else if(choices[i] === 7){
            obj[b] += 3
        }
    }
    if(obj["R"] < obj["T"]){
     answer += "T"   
    }
    else{
        answer += "R"   
    }
    if(obj["C"] < obj["F"]){
        answer += "F"   
    }
    else{
        answer += "C"   
    }
    if(obj["J"] < obj["M"]){
        answer += "M"   
    }
    else{
        answer += "J"   
    }
    if(obj["A"] < obj["N"]){
        answer += "N"   
    }
    else{
        answer += "A"   
    }
    return answer;
}