function solve(input){
    let town = input[0]
    let salesCount = Number(input[1])
    
    let comm = 0 ;
    if (salesCount >= 0 && salesCount <= 500) {
        if (town === "Sofia") {
            comm = salesCount * 0.05 
            console.log((comm).toFixed(2));
        } else if (town === "Varna") {
            comm = salesCount * 0.045 
            console.log((comm).toFixed(2));
        } else if (town === "Plovdiv") {
            comm = salesCount * 0.055
            console.log((comm).toFixed(2));
        } else {console.log("error");}
    } else if (salesCount > 500 && salesCount <= 1000) {
        if (town === "Sofia") {
            comm = salesCount * 0.07 
            console.log((comm).toFixed(2));
        } else if (town === "Varna") {
            comm = salesCount * 0.075 
            console.log((comm).toFixed(2));
        } else if (town === "Plovdiv") {
            comm = salesCount * 0.08
            console.log((comm).toFixed(2));
        } else {console.log("error");}
    } else if (salesCount >1000 && salesCount <= 10000) {
        if (town === "Sofia") {
            comm = salesCount * 0.08 
            console.log((comm).toFixed(2));
        } else if (town === "Varna") {
            comm = salesCount * 0.10 
            console.log((comm).toFixed(2));
        } else if (town === "Plovdiv") {
            comm = salesCount * 0.12
            console.log((comm).toFixed(2));
        } else {console.log("error");}
    } else if (salesCount <0) {
        console.log("error");
    } else {
        if (town === "Sofia") {
            comm = salesCount * 0.12 
            console.log((comm).toFixed(2));
        } else if (town === "Varna") {
            comm = salesCount * 0.13 
            console.log((comm).toFixed(2));
        } else if (town === "Plovdiv") {
            comm = salesCount * 0.145
            console.log((comm).toFixed(2));
        } else {console.log("error");}
    }
    
    } 
    solve