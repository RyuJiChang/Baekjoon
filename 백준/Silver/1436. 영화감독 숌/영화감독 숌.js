const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let arr = []
for(let i = 666 ; i < 2666800 ; i++){
	if(String(i).indexOf('666') !== -1){
	 arr.push(i)		
	}
}
console.log(arr[input-1])