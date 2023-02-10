function solve(input){
    let i = 0; 
    let command = input[i]
    i++
    let maxNumber = Number.MIN_SAFE_INTEGER ;
    while (command !== "Stop") {    
        let num = Number(command)
        command = input[i]
        i++
        if(num > maxNumber) {
            maxNumber = num ;
        }
 } 
 console.log(maxNumber);
}
solve(["-10",
"20",
"-30",
"Stop"])

