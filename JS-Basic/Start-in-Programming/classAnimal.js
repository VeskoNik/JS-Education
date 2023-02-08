function solve(input) {
    let animal = input[0]
    //crocodile, tortoise, snake -> reptile
    switch (animal) {
        case "dog" : console.log("mammal"); break ; 
        case "crocodile" : 
        case "tortoise" : 
        case "snake" : console.log("reptile"); break ;
        default : console.log("unknown"); break ; 

    }
} 
solve (["dog"])