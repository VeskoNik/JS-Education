function solve(arr){
    arr = arr.sort((a,b) => a.localeCompare(b))
    arr.forEach((element , index) => {
        console.log(`${index + 1}.${element}`);
        
    });
}
solve(["John",

"Bob",

"Christina",

"Ema"])