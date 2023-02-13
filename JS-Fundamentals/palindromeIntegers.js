function solve(arr){
    for(let i = 0 ; i < arr.length ; i++) {
        let num = arr[i].toString()
        let sumCurrent = []
        for(let j = 0 ; j < num.length ; j ++) {
            let currentChar = num[j]
            sumCurrent.unshift(currentChar)   
        }
        if(sumCurrent.join('') === num){ 
            console.log(true);
        }else{console.log(false);}
    }
}
solve([32,2,232,1010])