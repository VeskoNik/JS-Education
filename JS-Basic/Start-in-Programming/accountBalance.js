function solve(input){
    let i = 0 ;
    let account = 0;

    let command = input[i]
    i++
    while (command !== "NoMoreMoney") {      
        let sum = Number(command)
        if (sum < 0) {
            console.log(`Invalid operation!`);
            break ;

        }
        account += sum
        console.log(`Increase: ${sum.toFixed(2)}`);
        command = input[i]
        i++
    }
    console.log(`Total: ${account.toFixed(2)}`);
  
}
solve(["120",
"45.55",
"-150"])

