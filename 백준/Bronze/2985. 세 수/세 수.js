let [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if(a+b === c){
 console.log(`${a}+${b}=${c}`)   
}
else if(a === b+c){
 console.log(`${a}=${b}+${c}`)   
}
else if(a-b === c){
 console.log(`${a}-${b}=${c}`)   
}
else if(a === b-c){
 console.log(`${a}=${b}-${c}`)   
}
else if(a/b === c){
 console.log(`${a}/${b}=${c}`)   
}
else if(a === b/c){
 console.log(`${a}=${b}/${c}`)   
}else if(a*b === c){
 console.log(`${a}*${b}=${c}`)   
}
else if(a === b*c){
 console.log(`${a}=${b}*${c}`)   
}