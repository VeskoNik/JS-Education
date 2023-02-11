function solve(input) {
    let start = Number(input[0])
    let end = Number(input[1])
    let neededNum = Number(input[2])
    let counter = 0
    let foundNeededNum = false; 

    for(let i = start ; i <= end ; i++ ) {
        for ( let y = start ; y <= end ; y++) {
            let result = i + y ;
            counter++
            if(result === neededNum) {
                console.log(`Combination N:${counter} (${i} + ${y} = ${neededNum})`)
                foundNeededNum = true ; 
                break;
            }
        }
        if (foundNeededNum) {
            break;
        }
    }
    if(!foundNeededNum) {
        console.log(`${counter} combinations - neither equals ${neededNum}`);
    }
}
solve(["88", 
"888", 
"2000"])

