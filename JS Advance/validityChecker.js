function solve(x1,y1,x2,y2){
let formula = Math.sqrt((x2 - x1)**2 + (y2 -y1)**2)
for (let i = 0; i < 3; i++) {
    if(i ===0){
    let copyx2 = 0 
    let copyy2 = 0
    let formula = Math.sqrt((copyx2 - x1)**2 + (copyy2 -y1)**2)
    if(Number.isInteger(formula)){
        console.log(`{${x1}, ${y1}} to {${copyx2}, ${copyy2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${copyx2}, ${copyy2}} is invalid`);
    }
    }else if( i === 1){
        let copyx1 = 0 
        let copyy1 = 0
        let formula = Math.sqrt((x2 - copyx1)**2 + (y2 - copyy1)**2)
        if(Number.isInteger(formula)){
            console.log(`{${x2}, ${y2}} to {${copyx1}, ${copyy1}} is valid`);
        }else{
            console.log(`{${x2}, ${y2}} to {${copyx1}, ${copyy1}} is invalid`);
        }
    }else if( i === 2){
        let formula = Math.sqrt((x2 - x1)**2 + (y2 -y1)**2)
        if(Number.isInteger(formula)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    
}
}
solve(3, 0, 0, 4)