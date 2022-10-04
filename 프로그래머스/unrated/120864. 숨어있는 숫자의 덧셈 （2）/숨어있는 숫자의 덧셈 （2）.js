function solution(my_string) {
    let str = ''
    for(let i = 0 ; i < my_string.length ; i++){
        if(my_string[i].toUpperCase() === my_string[i].toLowerCase()){
            str += my_string[i]
        }
        else{
            str += ' '
        }
    }
    return str.trim().split(' ').map(Number).reduce((a,b) => a+b)
}