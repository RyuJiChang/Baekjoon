function solution(spell, dic) {
    let spellStr = spell.sort().join('')
    for(let i = 0 ; i < dic.length ; i++){
        if(dic[i].split('').sort().join('') === spellStr){
            return 1
        }
    }
    return 2;
}