function solution(fees, records) {
    let answer = [];
    let obj = {}
    for(let i = 0 ; i < records.length ; i++){
        let [a,b,c] = records[i].split(' ')
        if(c === 'IN' && obj[b] === undefined){
            obj[b] = [Number(a.split(':')[0])*60 + Number(a.split(':')[1]) , c , 0]
        }
        else if(c === 'IN'){
            obj[b][0] = Number(a.split(':')[0])*60 + Number(a.split(':')[1])
            obj[b][1] = c
        }
        else{
            obj[b][2] += (Number(a.split(':')[0])*60 + Number(a.split(':')[1]) -obj[b][0])
            obj[b][0] = 0
            obj[b][1] = c
        }
    }
    for(let key in obj){
        if(obj[key][1] === "IN"){
            obj[key][1] = "OUT"
            obj[key][2] += (1439 - obj[key][0]) 
            obj[key][0] = 0
        }
    }
    let names = []
    for(let key in obj){
        names.push(key)
    }
    names.sort()
    for(let i = 0 ; i < names.length ; i++){
        if(obj[names[i]][2] <= fees[0]){
            answer.push(fees[1])
        }
        else{
            answer.push(fees[1] + Math.ceil((obj[names[i]][2]-fees[0])/fees[2])*fees[3])
        }
    }
    return answer;
}