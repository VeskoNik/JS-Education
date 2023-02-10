function solve(input){
    let index = 0 
    let command = input[index]
    index++
    
    let steps = 0 
   
    while (command != "Going home") { 

        let stepsIncrease = Number(command)
        steps += stepsIncrease ;
        
        if (steps >= 10000) {   
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
        break;
        }

        command = input[index]
        index++

    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index])
        steps += stepsToHome
        if(steps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - steps} more steps to reach goal.`)
        }
    } 
}
solve(["1000",
"1500",
"2000",
"6500"])

