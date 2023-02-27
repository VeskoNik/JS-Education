function solve(text){
let result = ''
for(let i= 0 ; i < text.length;i++){
 if(i === 0){
    result+=`${text[i]}`
    i++
 }
 if(text[i] === text[i-1]){
    continue;
 }else{
    result+=`${text[i]}`
 }
}
console.log(result);
}
solve('aaaaabbbbbcdddeeeedssaa')