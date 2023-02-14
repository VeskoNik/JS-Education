function solve(arr){
    let foodGrams = arr[0] * 1000
    let hayGrams = arr[1] * 1000
    let coverGrams = arr[2] * 1000
    let pigGrams = arr[3] * 1000
    let month = 30
    
    for(let i = 1 ; i <= month ;i++){
        foodGrams-= 300
        if(i % 2 === 0 ){
            hayGrams-=(foodGrams*0.05)
        }
        if(i % 3 === 0){
            coverGrams -= (pigGrams/3).toFixed(2)
        }
        if(foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0){
            console.log("Merry must go to the pet store!");
            return;
        }
    }
console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams/1000).toFixed(2)}, Hay: ${(hayGrams/1000).toFixed(2)}, Cover: ${(coverGrams/1000).toFixed(2)}.`);
}
solve(["9",
"5",
"5.2",
"1"])

