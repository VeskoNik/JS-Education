function solve(arr , magicNum) {        
for (let i = 0 ; i < arr.length ; i++) {
        let currentNum = 0    
        currentNum = arr[i] 
        for ( let j = i+1 ; j < arr.length ; j++ ) {
            let result = 0
            result = currentNum + arr[j]
                result === magicNum ? console.log(`${currentNum} ${arr[j]}`) : ''          
        }   
    }
}
solve([1, 7, 6, 2, 19, 23],8)