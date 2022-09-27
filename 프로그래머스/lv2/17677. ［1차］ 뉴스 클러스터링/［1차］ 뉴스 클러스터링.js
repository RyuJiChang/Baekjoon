function solution(str1, str2) {
    let stra = str1.toUpperCase()
    let strb = str2.toUpperCase()
    let arr1 = []
    let arr2 = []
    for(let i = 0 ; i < stra.length-1 ; i++){
        if(stra[i].charCodeAt() >= 65 && stra[i].charCodeAt() <= 90 && stra[i+1].charCodeAt() >= 65 && stra[i+1].charCodeAt()  <= 90){
            arr1.push(stra[i]+stra[i+1])
        }
    }
    for(let i = 0 ; i < strb.length-1 ; i++){
        if(strb[i].charCodeAt() >= 65 && strb[i].charCodeAt() <= 90 && strb[i+1].charCodeAt() >= 65 && strb[i+1].charCodeAt()  <= 90){
            arr2.push(strb[i]+strb[i+1])
        }
    }
    let aa = arr1.length
    let bb = arr2.length
    for(let i = 0 ; i < arr1.length ; i++){
        if(arr2.indexOf(arr1[i]) !== -1){
            arr2.splice(arr2.indexOf(arr1[i]),1)
        }
    }
    let cc = bb-arr2.length
    if(aa === bb && bb === cc){
        return 65536
    }
    // else if(aa == bb && )
    else{
        return Math.floor(65536 *cc/(aa+bb-cc))
    }
    // return[aa,bb,arr2.length]
}