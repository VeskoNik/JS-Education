function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let result = "";
   
    for(let i = num1; i <= num2 ; i++) {;
    let iAssStr = i.toString()
    let evenSum = 0 ;
    let oddSum = 0 ;
  

    for(let index = 0 ; index < iAssStr.length ; index++) {
        let currentNum = Number(iAssStr[index]) ;
        let position = index+1 ;

        if(position%2 === 0){
            evenSum += currentNum

        } else {
            oddSum += currentNum
        }
    }
    if (evenSum === oddSum) {
        result += `${iAssStr} `
    }
    }
    console.log(result);
}
solve(["100000",
"100050"])
