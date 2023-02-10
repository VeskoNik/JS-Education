function solve(input){
    let i = 0; 
    let command = input[i]
    i++
    let minNumber = Number.MAX_SAFE_INTEGER ;
    while (command !== "Stop") {    
        let num = Number(command)
        command = input[i]
        i++
        if(num < minNumber) {
            minNumber = num ;
        }
 } 
 console.log(minNumber);
}
solve(["100",
"99",
"80",
"70",
"Stop"])
