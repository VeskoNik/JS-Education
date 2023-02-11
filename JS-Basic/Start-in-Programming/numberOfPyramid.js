function solve(input){
    let num = Number(input[0])
    let currentNum = 1
    let bigger = false
    let buff = '';
    for (let rows = 1 ; rows <= num ; rows++) { 
        for (let colum = 1 ; colum <= rows ; colum++) {
            if (currentNum > num) {
                bigger = true ; 
               break
            } 
            buff += currentNum + " " ;
            currentNum++ ;

        }
        console.log(buff);
        buff = "" ;
        if (bigger) {
        break
        }
    }  console.log(buff);
    
    
}
solve(["7"])