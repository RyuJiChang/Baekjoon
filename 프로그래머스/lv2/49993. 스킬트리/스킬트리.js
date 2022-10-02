function solution(skill, skill_trees) {
    let arr = []
    for (let i = 0 ; i < skill_trees.length ; i++){
        let data = []
        for(let j = 0 ; j < skill_trees[i].length ; j++){
            if(skill.indexOf(skill_trees[i][j]) !== -1){
                data.push(skill.indexOf(skill_trees[i][j]))
            }
        }
        arr.push(data)
    }
    
    let answer = arr.length;
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].length >= 1 && arr[i][0] !== 0){
            answer--
            continue
        }
        else{
            for(let j = 0 ; j < arr[i].length-1 ; j++){
                if(arr[i][j]+1 !== arr[i][j+1]){
                    answer--
                    break
                }
            }
        }
    }
    
    return answer;
}