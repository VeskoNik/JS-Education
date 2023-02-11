function solve(input) {
    let index = 0
    let movieName = input[index]
    index++
    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidsTicketsCount = 0; 

    while( movieName != "Finish") {
        let freeSpaces = Number(input[index])
        index++
        let ticketsType = input[index]
        index++
        let spaceTaken = 0;
        while(ticketsType != "End") {
            spaceTaken++
            if (ticketsType === "student") {
                studentTicketsCount++
            } else if (ticketsType === "standard") {
                standardTicketsCount++
            } else {
                kidsTicketsCount++
            }
            if (spaceTaken === freeSpaces) {
                break;
            }
            ticketsType = input[index]
            index++

        }
        let SpaceTakenPercent = (spaceTaken / freeSpaces) * 100
        console.log(`${movieName} - ${(SpaceTakenPercent).toFixed(2)}% full.`);

        movieName = input[index]
        index++
    }
    let totalTicketsCount = studentTicketsCount + standardTicketsCount + kidsTicketsCount
    let studentTicketsPercent = ((studentTicketsCount / totalTicketsCount) * 100).toFixed(2)
    let standardTicketsPercent = ((standardTicketsCount / totalTicketsCount) * 100).toFixed(2)
    let kidsTicketsPercent = ((kidsTicketsCount / totalTicketsCount) * 100).toFixed(2) ;

    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${studentTicketsPercent}% student tickets.`);
    console.log(`${standardTicketsPercent}% standard tickets.`);
    console.log(`${kidsTicketsPercent}% kids tickets.`);
}
solve(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
