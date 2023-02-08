function solve(input) {
    let typeProjection = input[0] ;
    let rows = Number(input[1]) ;
    let colums = Number(input[2]) ;

    let price = 0;
    if (typeProjection === "Premiere") {
        price = (rows * colums) * 12
        console.log(`${(price).toFixed(2)} leva`);
    } else if (typeProjection === "Normal") {
        price = (rows * colums) * 7.50
        console.log(`${(price).toFixed(2)} leva`);
    } else if (typeProjection === "Discount") {
        price = (rows * colums) * 5
        console.log(`${(price).toFixed(2)} leva`);
    }
}
solve(["Discount",
"12",
"30"])


