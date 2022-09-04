function solution(id_list, report, k) {
    var answer = {}
    let obj = {}
    let result = []
    for(let i = 0 ; i < id_list.length ; i++){
        obj[id_list[i]] = new Array(0)
        answer[id_list[i]] = 0
    }
    for(let i = 0 ; i < report.length ; i++){
        let [a,b] = report[i].split(' ')
        if(obj[b].indexOf(a) === -1){
        obj[b].push(a)
        }
    }
    for(let key in obj){
        if(obj[key].length >= k){
            for(let i = 0 ; i < obj[key].length ; i++){
                answer[obj[key][i]]++
            }
        }
    }
    for(let key in answer){
        result.push(answer[key])
    }
    return result;
}