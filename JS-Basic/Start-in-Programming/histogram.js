function solve(input){
 let n = Number(input[0]) 
 let group1 = 0;
 let group2 = 0;
 let group3 = 0;
 let group4 = 0;
 let group5 = 0;
 
 

    for (let i = 1 ; i <=n ; i++) {
        let currentNumber = Number(input[i]) 
        if (currentNumber < 200) {
            group1 +=1 
            
        } else if ( currentNumber < 400) {
            group2 +=1 
           
        } else if (currentNumber < 600 ) {
            group3 +=1
           

        } else if ( currentNumber < 800) {
            group4 +=1
           
        } else {
            group5 +=1
        
        } 
        
        
     }  
    let percentGroup1 = (group1 / n * 100).toFixed(2)
    let percentGroup2 = (group2 / n * 100).toFixed(2)
    let percentGroup3 = (group3 / n * 100).toFixed(2)
    let percentGroup4 = (group4 / n * 100).toFixed(2)
    let percentGroup5 = (group5 / n * 100).toFixed(2)

    
        console.log(`${percentGroup1}%`);
        console.log(`${percentGroup2}%`);
        console.log(`${percentGroup3}%`);
        console.log(`${percentGroup4}%`);
        console.log(`${percentGroup5}%`);
        
    
}
solve(["3",

"1",

"2",

"999"])