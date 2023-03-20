function solve(arr){
 let start = 0;
 let result = [];
 for (const el of arr) {
    start++
    if(el === 'add'){
        result.push(start)
    }else if(el === 'remove'){
        result.pop()
    }
 }
 if(result.length != 0){
    console.log(result.join('\n'));
 }else{
    console.log('Empty');
 }
}
solve(['remove', 'remove', 'remove'])