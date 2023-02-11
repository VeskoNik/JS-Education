function solve(input){
    let floorCount = Number(input[0])
    let roomCount = Number(input[1]) 

 


    for(let i = floorCount ; i > 0 ; i--) {
        let buffer = "";
        for (let y = 0 ; y < roomCount ; y ++) {
            if (i === floorCount){
                buffer += `L${i}${y} ` 
            } else if (i % 2 === 0){
                buffer += `O${i}${y} `
            } else {
                buffer += `A${i}${y} `
            }
        }
    
        console.log(buffer);
    }
 
}
solve(["6", "4"])