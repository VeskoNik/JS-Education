function solve(input){
    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let number = 0 ;
    let sum = 0 ;
    let buffer = "" ; 
    for (let i = n1; i <= n2 ; i++) { 

       if ( number = i % 9 === 0 )   { 
        sum += i;
        buffer += i + "\n" ;
        
        
       
    }
    
} console.log(`The sum: ${sum}`);
 console.log(buffer);
}
solve(["100" , "200"])