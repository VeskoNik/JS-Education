function solve(arr) {
    let sumRight = 0 ;
    let sumLeft = 0 ; 
    let boo = true
    let index = 0
    if (arr.length <= 1){
        console.log(0);
        return;
    }
    for(let i = 0 ; i < arr.length ; i ++) {
       sumLeft+= arr[i]
       sumRight = 0 
       for(let j =i+1 ; j< arr.length ; j++) {
        sumRight+= arr[j+1]
        if(sumLeft === sumRight){
            index = i+1
            boo = false
        }else{continue}
       }
    }
    if(boo) {
        console.log('no');
    }else {console.log(index);}

}
solve([1, 2, 3])