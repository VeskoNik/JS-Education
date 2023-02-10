function solve(input){
    let index = 0
    let width = Number(input[index])
    index++
    let length = Number(input[index])
    index++
    let height = Number(input[index])
    index++
    let command = input[index]
    index++
    let spacem2 = width*length*height ;
    let boxesM2 = 0 ;



    while(command != "Done") {
        boxesM2 = Number(command);
        if (spacem2 >= boxesM2) {
            spacem2 -= boxesM2
        } else {
            console.log(`No more free space! You need ${boxesM2 - spacem2} Cubic meters more.`);
            return;
        }
        command = input[index]
        index++


    }
    console.log(`${spacem2} Cubic meters left.`);

}
solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


