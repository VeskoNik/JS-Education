function solve(input){
    let number = Number(input[0]) ;
    if (number <= 10) {
        console.log("slow");
    } else if (number <= 50) {
        console.log("average");
    } else if (number <= 150) {
        console.log("fast");
    } else if (number <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }

}
solve(["1300"])