function solution(sizes) {
    let length = 0
    let width = 0
    for(let i = 0 ; i < sizes.length ; i++){
        let [a,b] = sizes[i]
        if(a > b){
            length = Math.max(length, a) 
            width = Math.max(width, b)
        }
        else{
            length = Math.max(length, b) 
            width = Math.max(width, a)            
        }
    }
    return length * width;
}