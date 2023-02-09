function solve(input) {
    let tabs = Number(input[0])
    let salary = Number(input[1])

    for (i = 2; i <= tabs + 2; i++) {
        if (input[i] === "Facebook") {
            salary -= 150 
        } else if (input[i] === "Instagram") {
            salary -= 100
        } else if (input[i] === "Reddit") {
            salary -= 50
        } 
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
        return ;
    } else {console.log(Math.trunc(salary));}
  
}
   
solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])