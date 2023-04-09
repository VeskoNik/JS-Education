function solve(arr){
    const obj= {};
for(let i = 0;i<arr.length; i+=2){
    const item = arr[i]
    const cal = arr[i+1]
    obj[item] = Number(cal)
}
console.log(obj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])