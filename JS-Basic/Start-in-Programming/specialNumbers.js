function solve(input){
    let n = Number(input[0])
    let start = 1111 ;
    let end = 9999 ; 
    
    let buff = '';
   while (start < end) {
        let startAssStr = start.toString()
        start++
        let counter = 0 ;
        for (let i = 0 ; i < startAssStr.length ; i++) {
            let startAssNum = Number(startAssStr[i])
            if (n % startAssNum === 0) {
                counter++
                if (counter === 4) {
                    buff += `${startAssStr} `
                }
            }
            

        }
   }
console.log(buff);
        



}
solve(["16"])