function solve(input){
    let figure = input[0] ;
    let a = Number(input[1]) ;
    let b = Number(input[2]) ;
    let r = Number(input[1]) ;

    if (figure === "square") {
        console.log((a * a).toFixed(3));
    } else if (figure === "rectangle") {
        console.log((a * b).toFixed(3));
    } else if (figure === "circle") {
        console.log((Math.PI * (r*r)).toFixed(3));
    } else {
        console.log(((a*b) / 2).toFixed(3));
    }
    
}
solve(["rectangle",
"7",
"2.5"])
