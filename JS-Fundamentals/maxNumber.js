function solve(arr){
    let result = []
    let bigger = true
    for (let i = 0 ; i < arr.length ; i++) {
       let currentNum = 0
       let bigger = true
       currentNum = arr[i] 
       for ( let j = i+1 ; j < arr.length ; j++ ) {
            if(currentNum <= arr[j]) {
                bigger = false
            }
       }
       if (bigger) {
        result.push(arr[i])
       }

        }
    console.log(result.join(' '));
}
solve([14, 24, 3, 19, 15, 17])